---
title: "Seminggu habis untuk bikin ARCHITECTURE.md — sebelum nulis kode pertama"
date: "2026-04-22"
tags: ["system design", "multi-tenant", "pos", "react"]
platform: "linkedin"
---

Kalau Anda bikin POS restoran yang:
- Multi-tenant (banyak outlet)
- Multi-role (admin, kasir, meja, pemilik)
- Multi-outlet (cabang)

...menulis kode dulu = cari masalah.

Jadi saya habiskan **seminggu cuma buat ARCHITECTURE.md** untuk proyek **MJD**.

Keputusan yang keluar dari minggu itu:
- Schema PostgreSQL: tenant_id di level row, bukan level database. Lebih ringan maintenance, lebih simple query.
- Role-based access control: permission matrix per resource, bukan per route. Scalable kalau fitur nambah.
- Outlet isolation: strict foreign key constraints. Kasir outlet A nggak bisa liat order outlet B, meski akses ke query yang sama.

Stack: React + Vite (frontend), Node.js/Express (backend), PostgreSQL.

Status: WIP, tapi fondasinya solid. **Kalau fondasi salah, nambah fitur = bikin utang teknis.**

Anyone punya pengalaman build multi-tenant SaaS? Saya mau denger pain point kalian.

#systemdesign #multitenancy #pos #architecture
