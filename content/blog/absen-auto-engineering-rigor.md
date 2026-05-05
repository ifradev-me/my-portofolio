---
title: "absen-auto: Belajar Engineering Rigor dari Bot Absensi"
excerpt: "Membangun bot otomasi absensi SimKuliah UNSYIAH bukan soal scraping — tapi soal testing race condition, containerization, dan docs yang serius."
date: "2026-04-22"
tags: ["absen-auto", "nodejs", "typescript", "testing", "docker", "puppeteer"]
published: true
---

# absen-auto: Belajar Engineering Rigor dari Bot Absensi

Kalau saya bilang "bot otomasi absensi", mungkin kebayangnya script sederhana yang jalan di cron: buka browser, klik tombol, selesai. Memang mulainya begitu. Tapi kalau tujuannya production-grade dan berjalan tanpa intervensi berminggu-minggu, ceritanya berbeda.

## Problem Statement

SimKuliah UNSYIAH butuh absensi harian dalam window waktu tertentu. Kalau kelewat, tidak ada retry. Saya butuh sistem yang:

1. Absen otomatis pada jadwal yang ditentukan.
2. Recover sendiri kalau koneksi gagal atau SimKuliah lambat.
3. Tidak double-submit kalau dua proses absen jalan bersamaan (cron + manual trigger + retry).
4. Bisa di-restart, di-migrasi, atau dipindah server tanpa kehilangan data.

## Stack Pilihan

- **Node.js + TypeScript** — type safety mengurangi bug silly
- **Express** — API untuk trigger manual + health check
- **MongoDB** — flexibility schema untuk log absensi yang formatnya bisa berubah
- **Puppeteer** — headless browser untuk scraping form login + submit absen
- **Jest** — testing, termasuk race condition
- **Docker multi-stage** — image kecil, deployment konsisten

## Race Condition: Yang Bikin Saya Menulis Test Khusus

Ini bagian paling menarik. Bayangkan skenario:

1. Cron trigger jam 08:00 → proses A mulai submit absensi.
2. User panic trigger manual via API jam 08:00:01 → proses B mulai submit.
3. Proses A sukses, tapi sebelum update flag "sudah absen" di DB, proses B sudah baca flag (masih false) dan ikut submit.
4. Hasilnya: double submission. Server SimKuliah mungkin reject, mungkin terima dua-duanya, mungkin error.

Saya tulis unit test yang simulasi skenario ini pakai Jest + fake timer. Test itu nangkep bug di versi awal saya — solusinya: **pessimistic lock** di level MongoDB dengan operasi `findOneAndUpdate` atomic.

Satu test file. Nyelametin banyak kebakaran produksi.

## Docker Multi-Stage

Image production saya cuma ~150MB. Trick: multi-stage build.

- Stage 1 (`builder`): install semua dependency + build TypeScript → JS.
- Stage 2 (`runner`): cuma copy hasil build + `node_modules` production.

Kalau Anda deploy aplikasi Node.js di server VPS kecil, ini bikin beda signifikan.

## Migration Script

Schema MongoDB saya evolve seiring waktu. Alih-alih manual run query di MongoDB shell, saya tulis migration script terversi. Setiap deployment, script cek versi schema di DB vs versi schema di code, dan apply migration yang perlu.

Ini terinspirasi dari Rails/Django migrations, tapi disesuaikan untuk MongoDB.

## Pelajaran

Yang saya bawa pulang dari proyek ini:

1. **Testing bukan soal coverage angka — soal testing skenario yang bikin produksi meledak.** Race condition test = satu file, impact-nya besar.
2. **Docker bukan cuma untuk "run in container" — cara optimasi size lewat multi-stage jarang dibahas, padahal impact-nya jelas.**
3. **Migration script harus ada sejak awal, sebelum schema complex.** Menunda = migration hari-H jadi pekerjaan malam.

Proyek ini ada di GitHub (link akan saya update). Siapa pun yang mau build otomasi serupa, saya happy diskusi di DM.
