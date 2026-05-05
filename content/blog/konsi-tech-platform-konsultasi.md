---
title: "Konsi Tech: Membangun Platform Edukasi Konstitusi dengan Lapor HAM"
excerpt: "Konsi Tech bukan platform konsultasi teknis — ini platform edukasi konstitusi Indonesia plus kanal laporan publik yang notifikasinya langsung ke Telegram admin. Cerita arsitektur dan keputusan desain."
date: "2026-04-22"
tags: ["konsi-tech", "express", "mongodb", "telegram", "openai", "buildinpublic"]
published: true
---

# Konsi Tech: Platform Edukasi Konstitusi + Lapor HAM

Ketika klien datang ke saya dengan konsep **Konsi Tech**, ada dua kebutuhan yang ternyata saling melengkapi:

1. Banyak orang Indonesia tidak paham hak-hak mereka menurut konstitusi.
2. Ketika hak itu dilanggar, mereka tidak tahu mau lapor ke mana dan bagaimana.

Konsi Tech menjawab dua kebutuhan itu dalam satu platform.

## Dua Pilar Utama

### Pilar 1: Edukasi Konstitusi via AI

Bukan artikel statis. User bisa **tanya langsung** ke chatbot AI tentang konstitusi Indonesia — dan AI menjawab sesuai **level pemahaman user**: beginner, intermediate, atau advanced.

Sistem prompt di-tune per level. User pemula dapat penjelasan dengan analogi sehari-hari. User advanced dapat pembahasan pasal dan yurisprudensi. Level bisa diubah kapan saja dalam satu sesi chat, dan riwayat percakapan tersimpan per session.

Selain chatbot, ada juga:
- **Berita konstitusi** — artikel tentang amandemen, putusan MK, analisis hukum (content management via admin panel, format Markdown)
- **Forum diskusi** — user bisa posting topik konstitusi, upvote/downvote, reply

### Pilar 2: Sistem Laporan Publik

Ini bagian yang paling menarik secara teknis. User bisa submit laporan kasus: intoleransi, diskriminasi, pelanggaran HAM, korupsi — dengan identitas anonim opsional.

Yang membuat ini berbeda dari form Google biasa: **Telegram Bot**.

Setiap laporan baru masuk → admin langsung dapat notifikasi di Telegram dengan format terstruktur:

```
🆕 Laporan Baru - KONSI-TECH

🚨 MENDESAK  👤 Anonim

📋 ID: LAP-XYZ-001
📂 Kategori: Pelanggaran HAM
📍 Lokasi: Banda Aceh
📝 Judul: Intimidasi saat demonstrasi

[✅ Terima]  [🔍 Review]
[📋 Detail Lengkap]
```

Admin bisa klik tombol inline dari Telegram — tidak perlu buka browser. Setiap aksi tercatat di **timeline laporan**.

Status laporan punya lifecycle: `pending → in_review → investigating → resolved → closed`. Admin bisa tambah catatan, assign ke penyelidik lain, atau prioritaskan kasus mendesak.

Pelapor bisa cek status laporannya via ID publik — tanpa login.

## Arsitektur: Kenapa Custom Backend, Bukan BaaS?

Saya pilih **Express + MongoDB + JWT** daripada Supabase atau Appwrite untuk proyek ini karena:

1. **Telegram Bot perlu jalan di server** — integrasi `node-telegram-bot-api` harus in-process dengan server, tidak bisa di-hosting di BaaS client-only.
2. **Validasi laporan yang kompleks** — schema report dengan `attachments[]`, `adminNotes[]`, `timeline[]` lebih natural di Mongoose daripada row-level schema BaaS.
3. **OpenAI dipanggil dari server** — API key aman di environment variable, bukan exposed ke client bundle.

Stack backend: Express 4 + Mongoose + JWT + bcrypt + Multer (upload lampiran) + Joi (validasi input) + Telegraf + OpenAI.

Stack frontend: React 19 + Vite + TypeScript + Tailwind.

## Split Frontend/Backend dari Hari Pertama

Saya buat dua folder terpisah: `backend-konsi-tech/` dan `frontend-konsi-tech/`. Alasannya:

- **Backend harus jalan terus** untuk Telegram Bot — kalau mati, notifikasi tidak terkirim. Butuh proses Node.js mandiri.
- **Frontend bisa static** — bisa di-hosting di CDN, tanpa server. Backend di VPS terpisah.
- **Skalabilitas terpisah** — bot notifikasi tidak perlu di-scale bareng UI.

Trade-off yang saya terima: setup lebih panjang, CORS harus dikonfigurasi, dua deployment. Tapi untuk proyek yang diharapkan hidup lama dan klien mau tambah fitur bertahap, investasi ini worth it.

## Keputusan yang Menarik: Telegram sebagai Admin Interface

Banyak orang membangun admin panel web untuk notifikasi. Saya memilih Telegram karena alasan pragmatis: **klien dan admin-nya sudah pakai Telegram setiap hari**.

Daripada paksa mereka buka dashboard baru tiap ada laporan masuk, lebih baik notifikasi masuk ke channel yang sudah mereka monitor. Inline button di pesan Telegram jauh lebih cepat untuk quick action (terima/tolak) dibanding buka browser, scroll tabel, klik tombol.

Ini lesson yang saya bawa dari proyek ini: **infrastruktur terbaik adalah yang sudah dipakai user**, bukan yang paling canggih.
