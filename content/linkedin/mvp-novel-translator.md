---
title: "Menerjemahkan novel fanfiksi China dari fandom Korea butuh lebih dari GPT"
date: "2026-04-22"
tags: ["ai", "translation", "n8n", "postgresql"]
platform: "linkedin"
---

Case yang bikin saya sadar GPT mentah aja nggak cukup:

Ada novel fanfiksi. Ditulis orang China. Fandomnya dari grup K-pop Korea. Karakter utamanya pakai nama Korea di versi asli, tapi penulis China pakai transliterasi Mandarin.

Kalau saya lempar ke GPT mentah:
- "金泰亨" → diterjemahkan literal jadi "Jin Tae Hyung" (OK)
- Tapi konteks lagu, tempat, istilah fandom K-pop? Hilang.

Jadi saya bangun **MVP Novel Translator**:

1. Sebelum translasi, sistem deteksi fandom dari pattern nama/istilah.
2. Ambil glossary entity dari PostgreSQL yang sudah dicurate per fandom.
3. Panggil GPT-4.1 via OpenRouter dengan glossary sebagai context.
4. Entity baru (nggak ada di glossary) → skor confidence. Tinggi = auto-approve, rendah = masuk review manual.
5. Ada frontend untuk upload novel + UI review.

Stack: n8n (workflow) + GPT-4.1 + PostgreSQL + LangChain + Express frontend.

Lesson: **translasi bukan soal bahasa — soal konteks**. Semua tool terjemahan generik gagal di sini. Domain knowledge yang menang.

#ai #translation #openai #n8n #fandom
