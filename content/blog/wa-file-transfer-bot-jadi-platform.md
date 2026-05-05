---
title: "wa-file-transfer: Dari Bot WhatsApp Jadi Platform Mini"
excerpt: "Bot WhatsApp yang terima foto/PDF, compress, simpan, dan serve via website — dengan mindset SaaS sejak awal: runbook, CI/CD, retention policy."
date: "2026-04-22"
tags: ["wa-file-transfer", "whatsapp bot", "nextjs", "appwrite", "baileys"]
published: true
---

# wa-file-transfer: Dari Bot WhatsApp Jadi Platform Mini

Ide awalnya sederhana: "bisa nggak kirim file ke WhatsApp, terus teman saya download via link?"

Dari situ, saya sadar kebutuhan sebenarnya bukan "bot WhatsApp". Tapi "platform file sharing yang entry point-nya WhatsApp."

## Arsitektur

Sistem terbagi jadi dua bagian besar:

**1. Bot WhatsApp (Node.js + Baileys)**
- Listen incoming message dari user terdaftar.
- Kalau attachment foto → compress pakai `sharp` (resize ke dimensi wajar, kualitas JPEG 80%).
- Kalau attachment PDF → compress pakai `pdf-lib` (buang metadata, rekonstruksi).
- Upload ke Appwrite Storage.
- Generate link download + password opsional.
- Reply ke user dengan link + instruksi.

**2. Web Platform (Next.js 14)**
- User login dulu (auth via Appwrite).
- Lihat list file yang dikirim lewat bot.
- Download dengan password verification.
- Manual delete kalau mau hapus sebelum retention expire.

## Fitur yang Bikin Ini "Platform", Bukan "Bot"

**Retention policy**: setiap file punya TTL. Job background (cron) hapus file expired dan metadata-nya. Tanpa ini, storage bakal bengkak.

**Password protection**: opsional per file. Disimpan sebagai bcrypt hash, bukan plain text.

**Compression pipeline sebagai job queue**: file besar nggak diproses synchronous. Masuk queue dulu, worker ambil, proses. User dikasih tahu "file kamu sedang diproses" lalu ter-notify saat selesai.

## Production Mindset: Runbook dan CI/CD

Yang paling saya sayang di repo ini bukan kode aplikasinya, tapi dokumentasi operasionalnya:

- **RUNBOOK.md** — cara restart service, cara handle incident (bot disconnect, storage penuh, rate limit Appwrite), cara rollback deployment.
- **ARCHITECTURE.md** — diagram komponen, flow data, decision log ("kenapa pakai Appwrite bukan S3?").
- **.github/workflows/** — CI/CD lewat GitHub Actions. Setiap push ke `main` → build → test → deploy ke server.

Kenapa runbook penting? Karena **setiap bug produksi akan kejadian saat Anda lagi tidur**. Runbook yang bagus bikin orang lain (atau versi Anda yang ngantuk jam 2 pagi) bisa fix tanpa mikir dari nol.

## Integrasi Multi-API

Bagian yang paling tricky: orchestration antara Baileys (WhatsApp) + Appwrite (storage + auth + DB) + sharp/pdf-lib (compression). Setiap API punya error handling pattern sendiri. Solusi: wrapper layer yang normalkan error jadi format internal saya sendiri.

```typescript
// pseudocode
type StorageError =
  | { code: 'RATE_LIMIT', retryAfter: number }
  | { code: 'FILE_TOO_LARGE', maxSize: number }
  | { code: 'UNKNOWN', raw: unknown }

async function safeUpload(file: Buffer): Promise<Result<FileID, StorageError>>
```

Dengan ini, business logic saya nggak perlu tahu detail Appwrite error codes.

## Pelajaran

1. **Bot ≠ interface. Bot = salah satu entry point.** Begitu mindset bergeser, arsitektur bergeser juga.
2. **Runbook ditulis saat tenang, bukan saat insiden.** Kalau nunggu insiden, udah telat.
3. **Compression pipeline harus async untuk file besar.** Sync = user nunggu, memory meledak.

Stack lengkap: Node.js/TS + Express + Next.js 14 + Appwrite + Baileys + sharp + pdf-lib + Docker + GitHub Actions.
