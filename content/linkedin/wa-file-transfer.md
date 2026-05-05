---
title: "Bot WhatsApp yang saya perlakukan seperti aplikasi SaaS"
date: "2026-04-22"
tags: ["whatsapp bot", "nextjs", "devops", "appwrite"]
platform: "linkedin"
---

Pertanyaan: apa yang terjadi kalau Anda memperlakukan bot WhatsApp seperti aplikasi SaaS?

Jawabannya = **wa-file-transfer**.

Cara kerja:
1. User kirim foto/PDF ke bot WhatsApp.
2. Bot compress file (sharp untuk gambar, pdf-lib untuk PDF).
3. File disimpan di Appwrite storage.
4. User download via website dengan login + password protection.
5. File otomatis kehapus setelah retention period.

Yang bikin beda: saya bikin ini dengan mindset production — ada **runbook operasional**, **architecture docs**, **GitHub Actions CI/CD**, dan monitoring untuk job queue.

Stack: Node.js/TypeScript + Next.js 14 + Appwrite + Baileys + Docker.

Lesson: **runbook ditulis sebelum bug terjadi**, bukan sesudah. Kalau Anda nggak bisa jelasin cara restart service-nya lewat tulisan, Anda belum siap production.

Coba deh — ada di portofolio saya.

#whatsappbot #nextjs #appwrite #devops #saas
