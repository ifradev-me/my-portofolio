---
title: "MVP Novel Translator: Penerjemah yang Paham Fandom"
excerpt: "Kenapa menerjemahkan novel fanfiksi China dari fandom Korea butuh lebih dari sekadar GPT — dan bagaimana saya bangun sistem terjemahan yang context-aware."
date: "2026-04-22"
tags: ["mvp-translator", "ai", "n8n", "postgresql", "openai", "translation"]
published: true
---

# MVP Novel Translator: Penerjemah yang Paham Fandom

Kasus yang bikin saya sadar GPT mentah nggak cukup:

Ada novel fanfiksi, ditulis orang China, fandom-nya dari grup K-pop Korea. Penulis pakai transliterasi Mandarin untuk nama karakter asli Korea. Kalau saya lempar mentah ke GPT untuk translate ke Bahasa Indonesia, hasilnya:

- Nama karakter: sebagian diterjemahkan literal, sebagian hilang konteks.
- Istilah fandom (nama album, lagu, era): diterjemahkan sebagai kata biasa.
- Nuansa budaya Korea yang sudah di-absorp ke narasi China: ter-rusak lagi.

Saya butuh **sistem terjemahan yang tahu konteks fandom**. Bukan sekadar translator.

Lahirlah **MVP Novel Translator**.

## Arsitektur

Sistem ini bukan aplikasi monolithic. Saya pilih n8n sebagai workflow engine + PostgreSQL sebagai database + frontend Express untuk upload & review.

### Flow Utama

1. **Upload**: User upload novel (biasanya `.txt` atau chunk paragraf) via frontend Express.
2. **Preprocessing**: Workflow n8n clean text, deteksi bahasa sumber, split jadi chunks yang manageable untuk LLM.
3. **Fandom detection**: Pattern matching untuk deteksi fandom dari istilah/nama yang muncul. Kalau novel sebut "뷔" atau "BTS" atau "HYBE" — fandom K-pop BTS.
4. **Glossary lookup**: Query PostgreSQL untuk glossary entity per fandom. Tiap entity punya: `original_term`, `translated_term`, `context_notes`, `confidence_score`.
5. **Translation call**: Panggil GPT-4.1 via OpenRouter dengan:
   - System prompt yang include glossary relevan
   - User prompt: chunk text + "pertahankan translasi sesuai glossary"
6. **Entity extraction**: Deteksi entity baru yang nggak ada di glossary. Score confidence-nya.
7. **Save + route**:
   - Confidence tinggi → auto-approve, masuk glossary.
   - Confidence rendah → masuk review manual.
8. **Review flow**: Workflow `review.json` terima webhook approve/edit/reject, update glossary.

### Kenapa n8n, Bukan Kode Node.js Biasa?

Pertanyaan valid. Saya pilih n8n karena:

1. **Visual debugging**. Saat entity resolution salah, saya bisa trace step by step di UI — lebih cepat daripada log-based debugging.
2. **Iterasi cepat**. Tweak prompt GPT atau logic branching tanpa redeploy.
3. **Composable workflow**. `mvp_translation_v4.json` (main), `review.json` (approval), `bulk.json` (batch) — semua stand-alone tapi connected via webhook.

Trade-off: n8n self-hosted = satu more thing to maintain. Tapi untuk proyek eksplorasi seperti ini, worth it.

## Entity Resolution + Confidence Scoring

Bagian yang paling saya suka secara teknis.

Saat GPT-4 extract entity dari translation hasil, setiap entity dapat skor confidence berdasarkan:

- **Konsistensi**: Sama term di chunk berbeda → skor naik.
- **Context match**: Ada di kalimat yang sesuai dengan pattern fandom → skor naik.
- **Format**: Title case, kapital, formatting khas nama → skor naik.

Threshold yang saya set:
- `>= 0.8` → auto-approve (masuk glossary langsung)
- `0.5 - 0.8` → masuk review manual
- `< 0.5` → dibuang (kemungkinan noise)

## Versioning v1 → v4

Saya iterate workflow ini 4 kali:

- **v1**: Sekadar translate per chunk. Tidak ada glossary.
- **v2**: Tambah glossary manual (di `translator backend` folder lama, sekarang deprecated).
- **v3**: Tambah entity extraction tapi belum ada confidence scoring.
- **v4**: Full system dengan confidence + review flow.

Tiap versi saya simpan untuk dokumentasi iterasi. Di portofolio, yang saya tampilkan adalah v4.

## Frontend

Frontend saya bikin dengan Express + multer (upload) + pg (langsung ke PostgreSQL). Tujuannya minimal: upload novel, trigger workflow n8n via webhook, tampilkan hasil + UI review untuk entity baru.

Bukan pretty UI — tapi **berfungsi**. Prioritas saya adalah nge-validasi konsep translasi yang bener. UI bisa di-polish nanti.

## Pelajaran

1. **Translation is about context, not language.** LLM generik gagal di niche domain. Glossary + context = game changer.
2. **n8n underrated untuk workflow eksperimental.** Visual debugging doang sudah worth it.
3. **Confidence scoring bikin sistem jadi honest.** Kalau sistem nggak yakin, dia minta review manusia — bukan pura-pura yakin.
4. **Iterasi cepat > versi sempurna.** v1 saya jelek. v4 decent. Tanpa v1, nggak ada v4.

Stack: n8n + OpenRouter GPT-4.1 + PostgreSQL + LangChain + Express + pg + multer.

Kalau Anda kerja di domain translation khusus (legal, medical, manga, dsb), saya rasa pola context-aware ini applicable. DM saya kalau mau compare notes.
