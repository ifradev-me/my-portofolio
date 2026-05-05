---
title: "MJD: Belajar Multi-Tenant dari Bangun Sistem POS Restoran"
excerpt: "Sebelum nulis baris kode pertama, saya habiskan seminggu bikin ARCHITECTURE.md. Ini ceritanya — kenapa design dulu sebelum code di sistem multi-tenant."
date: "2026-04-22"
tags: ["mjd", "system design", "multi-tenant", "pos", "postgresql"]
published: true
---

# MJD: Belajar Multi-Tenant dari Bangun Sistem POS Restoran

Proyek **MJD** adalah sistem POS (point-of-sale) restoran dengan kompleksitas yang bikin saya harus berhenti di tempat sebelum nulis kode: **multi-tenant + multi-role + multi-outlet**.

Kalau Anda bangun sistem seperti ini dan langsung mulai dari `CREATE TABLE users...`, Anda akan menyesali decision itu dalam 3 bulan.

## Kompleksitas yang Dihadapi

**Multi-tenant** — Banyak restoran (tenant) pakai sistem ini. Data mereka isolated tapi infrastruktur shared.

**Multi-role** — Per tenant, ada 5+ role: pemilik, admin, kasir, waitress meja, operator dapur. Tiap role punya permission berbeda.

**Multi-outlet** — Satu tenant bisa punya banyak outlet (cabang). Operator di outlet A nggak boleh lihat order outlet B.

Tiga dimensi ini harus bekerja bareng tanpa bocor satu sama lain.

## Minggu 1: ARCHITECTURE.md

Saya nggak nulis kode minggu pertama. Saya nulis ARCHITECTURE.md.

Isi dokumen itu:

### Decision 1: Schema Multi-Tenant

Tiga pattern umum:
1. **Database per tenant** — isolation sempurna, tapi operational nightmare (migration × N).
2. **Schema per tenant** — tengahan, masih berat di operational.
3. **Row per tenant (tenant_id column)** — satu database, isolation via application-level query.

Pilihan saya: **pattern 3**. Alasannya:
- Skala awal: puluhan tenant, bukan ribuan.
- Maintenance effort jauh lebih ringan.
- Kalau butuh scale, bisa shard pakai tenant_id sebagai shard key nanti.

Risk: kalau query lupa include `tenant_id = ?` filter, data bocor antar tenant.

Mitigation: **row-level security di PostgreSQL**. Set policy `USING (tenant_id = current_setting('app.current_tenant'))`. Application layer set `current_tenant` di connection, query otomatis filter.

### Decision 2: Permission Matrix per Resource

Pattern biasa: role-based access control (RBAC) di level route. Masalahnya: kalau resource baru ditambah, developer harus ingat tambah permission check di route.

Pilihan saya: **permission matrix per resource**. Tiap resource punya matrix `[role × action]`. Middleware cek matrix sebelum action execute.

```typescript
// pseudocode
const ORDER_PERMISSIONS = {
  'owner': ['create', 'read', 'update', 'delete', 'refund'],
  'admin': ['create', 'read', 'update', 'refund'],
  'cashier': ['create', 'read'],
  'waitress': ['create', 'read'],
  'kitchen': ['read', 'update'],
}
```

Dengan ini, resource baru = tambah satu object permission. Route handler nggak perlu tahu role.

### Decision 3: Outlet Isolation lewat Foreign Key

Setiap record yang outlet-specific punya `outlet_id`. Query otomatis join dengan `outlet_id` user's current context. Session user include `current_outlet_id`.

Kalau user mau switch outlet (misal owner yang check multiple outlets), harus re-auth atau explicit "switch outlet" action.

## Stack

- **Frontend**: React + Vite, Tailwind, state management dengan Zustand
- **Backend**: Node.js + Express, typed dengan TypeScript
- **Database**: PostgreSQL dengan row-level security
- **Auth**: JWT + refresh token

## Status: WIP

Saya jujur di portofolio: proyek ini masih work-in-progress. Core fitur (order, payment, menu management) ada. Yang belum:
- Integrasi printer thermal
- Laporan keuangan (cash flow, daily summary)
- Sinkronisasi offline-online (POS harus jalan tanpa internet, sync saat online)

Tapi **fondasinya solid**. Kalau fondasi salah, nambah fitur = bikin utang teknis yang bunga-nya tinggi.

## Pelajaran

1. **Design dulu sebelum kode untuk sistem kompleks.** ARCHITECTURE.md jadi kontrak — gampang review, gampang iterasi.
2. **Row-level security PostgreSQL is magic** untuk multi-tenant. Tidak banyak yang tahu, padahal mengurangi bug isolation drastis.
3. **Permission matrix > per-route check** kalau resource banyak dan tambah.
4. **Outlet session context** harus jadi bagian dari user session, bukan URL param.

Kalau Anda lagi design multi-tenant SaaS dan stuck di keputusan schema, DM saya — happy share ARCHITECTURE.md saya sebagai referensi.
