---
title: "Tool analitik TikTok yang nggak pernah nyimpen data user di server"
date: "2026-04-22"
tags: ["react", "cloudflare workers", "privacy", "tiktok"]
platform: "linkedin"
---

Saya bangun tool analitik TikTok Studio yang **nggak pernah nyimpen data user di server. Nol.**

Kok bisa?

Semua kalkulasi jalan di browser user. File CSV/XLSX yang diupload → parse di client → hitung 15+ metrik engagement → diagnosa 4 area performa → semua di client-side. Server cuma dipakai untuk satu hal: AI recommendations via **Cloudflare Workers**, dan itu pun cuma kirim metric number, bukan raw data.

Kenapa begini?

1. **Privacy**: Data konten creator itu sensitif. Revenue, viewer demographic, itu bukan buat server orang.
2. **Cost**: Kalkulasi client = gratis. Kalau di server, saya harus bayar compute untuk setiap user.
3. **Speed**: Nggak ada network roundtrip untuk parsing.

Stack: React 19 + TypeScript + Vite + Tailwind + Recharts + Cloudflare Workers AI.

Trade-off: UI lebih kompleks, tapi trust user lebih tinggi. Worth it.

#react #privacy #tiktok #cloudflare #webdev
