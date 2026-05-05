---
title: "Bot absen yang lulus production 3 bulan tanpa rewake manual"
date: "2026-04-22"
tags: ["whatsapp automation", "node.js", "devops", "testing"]
platform: "linkedin"
---

Saya bangun **absen-auto** — bot yang absensi ke SimKuliah UNSYIAH secara otomatis via web scraping.

Terdengar sederhana? Tunggu dulu.

Tantangan terbesarnya bukan scraping. Tapi **race condition** ketika banyak proses absen terpicu bersamaan (cron + retry + manual trigger). Saya tulis unit test khusus untuk simulasi concurrent execution, dan itu nangkep bug yang kalau lolos ke production bakal bikin database ngaco.

Stack:
- Node.js + TypeScript + Express
- MongoDB (dengan migration script untuk schema evolution)
- Puppeteer untuk scraping
- Docker multi-stage
- Jest untuk race condition testing

Hal yang saya pelajari: **testing bukan soal code coverage — tapi soal testing skenario yang bikin produksi meledak**. Race condition test = 1 file, tapi itu yang nyelametin saya.

Siapa di sini yang pernah kebakar produksi gara-gara race condition? Share cerita di komen.

#nodejs #typescript #testing #devops #buildinpublic
