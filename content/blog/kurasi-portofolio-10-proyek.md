---
title: "Kurasi Portofolio: 10 Proyek yang Akhirnya Lolos Filter"
excerpt: "Dari 80+ folder di direktori coding saya, hanya 10 proyek yang layak masuk portofolio. Ini proses kurasinya — dan kenapa sebagian besar sisanya saya buang."
date: "2026-04-22"
tags: ["portofolio", "refleksi", "web dev", "whatsapp bot", "next.js"]
published: true
---

# Kurasi Portofolio: 10 Proyek yang Akhirnya Lolos Filter

Akhir pekan ini saya duduk serius dan melihat isi folder `d:/coding/` — tempat saya menyimpan semua eksperimen, tugas kuliah, proyek klien, dan script iseng selama beberapa tahun terakhir. Ada **12 folder utama dengan lebih dari 80 subfolder**.

Pertanyaannya sederhana: dari semua ini, mana yang benar-benar layak saya tampilkan di portofolio?

## Aturan Main

Sebelum mulai, saya tetapkan filter yang tegas:

1. **Bukan karya saya = keluar.** Folder yang berakhiran `-master` (ciri khas ZIP dari GitHub) langsung saya buang. Clone dengan modifikasi kecil pun tidak saya anggap layak.
2. **Hampir semua proyek scraper bukan karya saya.** Kecuali `absen-auto` dan `nutrisight scrape` — dua ini memang saya bangun dari nol.
3. **Tidak ada Python di portofolio.** Bukan karena Python-nya jelek, tapi karena saya memposisikan diri sebagai web/full-stack developer. Pembersih.py saya sayang, tapi bukan di portofolio.
4. **Proyek tutorial tidak masuk.** Folder `udemi/`, `Scrimba/`, dan `frontend_lama/5)brocode/` — semuanya mengikuti kursus, bukan solusi dari masalah saya sendiri.
5. **Versi duplikat → ambil yang paling matang.** Contoh: MVP Translation punya 4 iterasi (v1-v4). Hanya v4 yang masuk; v2 yang pernah jadi `translator backend` sudah saya pensiunkan.

Dengan filter ini, angka 80+ turun drastis.

## Hasil Akhir: 10 Proyek, 3 Tingkat

### Tingkat 1 — Flagship

Tiga proyek ini masuk ke semua format portofolio (CV, website, GitHub pinned, lamaran magang):

- **absen-auto** — Bot otomatis absensi SimKuliah UNSYIAH. Node.js + TypeScript, MongoDB, Puppeteer, Docker, Jest. Ada race condition testing dan migration script — bukti engineering rigor.
- **wa-file-transfer** — Bot WhatsApp yang terima foto/PDF, compress, lalu serve via website dengan login. Node.js + Next.js 14 + Appwrite + Baileys + sharp. Complete dengan runbook dan CI/CD.
- **konten analitik** — Tool analitik TikTok Studio. React 19 + Cloudflare Workers. Privacy-first (kalkulasi client-side), pakai AI untuk rekomendasi. Produk jadi, bukan latihan.

### Tingkat 2 — Strong Supporting

Empat proyek ini masuk ke website dan lamaran magang:

- **Nutrisight (konsolidasi)** — Landing + backend + pipeline enrichment GPT-4 + scraper dengan R2. Empat folder yang sebenarnya satu sistem end-to-end.
- **MVP Novel Translator** — Penerjemah novel bulk dari berbagai bahasa ke Bahasa Indonesia dengan **context-aware** per fandom. Contoh: novel fanfiksi China dari fandom Korea akan dikenali dan diterjemahkan dengan glossary yang tepat. n8n + GPT-4.1 + PostgreSQL + frontend Express.
- **Kroeng Community Showcase** — Website komunitas Kroeng untuk menampilkan ke luar apa yang bisa dilakukan anggotanya. Next.js 15 + Supabase.
- **MJD testing** — POS restoran multi-tenant dengan 5 role. Masih WIP, tapi arsitekturnya solid.

### Tingkat 3 — Additional

Tiga proyek ini masuk grid "more" di website portofolio:

- **portofolio** (situs yang sedang Anda baca ini) — Next.js 15 + markdown. Meta.
- **culture-x** — Frontend Culture X. Perlu saya lengkapi dokumentasinya.
- **konsi tech** — Platform konsultasi teknis. Split frontend/backend, perlu finalisasi.

## Yang Dibuang

Sisanya (sekitar 70 folder) ditolak dengan alasan berikut:

- Semua `-master`: handwriting-synthesis, AO3Scraper, HandSynthGUI, reddit-like-comments, twitter-clone, testing-main, dan lainnya — clone dari GitHub.
- Scraper eksternal: google-maps-scraper, wattpad-scraper, lightnovel-crawler.
- Kode kursus: udemi, Scrimba, brocode, fundamental HTML/CSS/JS.
- Skeleton kosong atau eksperimen kecil: playground, tes, scripts utility, starter template.
- Script Python (positioning diri).
- Proyek klaim orang lain yang masuk ke folder saya (HIMATEKTRO-USK, Bot Orang).

## Pelajaran dari Proses Ini

Hal yang paling saya sadari: **jumlah besar tidak sama dengan substansi besar**. 70 folder yang saya buang bukan berarti waktu terbuang — dari sana saya belajar fundamental, eksplorasi, dan membentuk preferensi tech stack.

Tapi untuk portofolio, jujur lebih baik daripada banyak. Kalau saya tampilkan 50 proyek campur-campur, recruiter harus menebak mana yang benar-benar karya saya. Kalau saya tampilkan 10 dengan cerita jelas, mereka tahu persis siapa saya sebagai developer.

## Langkah Selanjutnya

- Deploy proyek Tingkat 1 yang belum live.
- Tambahkan README lengkap + screenshot/demo di repo Tingkat 1-2.
- Konsolidasi repo Nutrisight (4 folder → 1 umbrella).
- Tulis case study per proyek Tingkat 1 — blog ini akan jadi rumahnya.
- Lengkapi deskripsi Culture X dan Konsi Tech sebelum publish.

Kalau Anda juga pernah bingung milah folder `coding/` sendiri, saya sarankan: mulai dengan filter orisinalitas yang tegas. Sisanya akan mengatur diri sendiri.
