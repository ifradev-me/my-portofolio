---
title: "Telegram sebagai admin interface — keputusan terbaik di Konsi Tech"
date: "2026-04-22"
tags: ["express", "telegram", "mongodb", "architecture", "buildinpublic"]
platform: "linkedin"
---

Saya baru selesai bangun **Konsi Tech** — platform edukasi konstitusi Indonesia sekaligus kanal laporan publik (intoleransi, diskriminasi, pelanggaran HAM, korupsi).

Salah satu keputusan desain yang paling berhasil: **Telegram Bot sebagai admin notification interface**.

Setiap laporan baru masuk → admin langsung dapat pesan Telegram dengan detail laporan + tombol inline (Terima / Review / Detail). Tidak perlu buka dashboard. Tidak perlu login ke sistem. Admin merespons dari Telegram yang sudah mereka pakai setiap hari.

Kenapa ini work:

**Infrastruktur terbaik = yang sudah dipakai user.**

Saya bisa membangun dashboard notifikasi yang canggih. Tapi kalau admin-nya sudah buka Telegram 50x sehari, dashboard baru itu justru friction tambahan. Telegram Bot = zero learning curve.

Selain itu:
- Status laporan punya lifecycle lengkap (pending → in_review → investigating → resolved)
- Setiap perubahan status tercatat di timeline
- Pelapor bisa cek status via ID publik — tanpa akun

Untuk sisi edukasi: ada chatbot AI konstitusi dengan level pembelajaran (beginner/intermediate/advanced), berita hukum, dan forum diskusi.

Stack: React + Vite (frontend) / Express + MongoDB + Telegraf + OpenAI (backend).

#telegram #express #mongodb #openai #buildinpublic
