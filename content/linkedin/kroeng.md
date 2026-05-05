---
title: "Website untuk komunitas yang ingin menunjukkan apa yang anggotanya bisa"
date: "2026-04-22"
tags: ["nextjs", "supabase", "community", "fullstack"]
platform: "linkedin"
---

Brief proyek ini sederhana: **"Kita butuh website yang nunjukin ke orang luar apa aja yang anggota Kroeng bisa lakukan."**

Bukan portofolio individu. Bukan company profile. Sesuatu di antaranya.

Yang saya bangun:
- Knowledge base untuk anggota share skill & case study
- News section untuk update kegiatan
- Achievements untuk showcase pencapaian
- Gallery untuk visual proof
- Auth flow supaya anggota bisa kontribusi konten sendiri

Stack: **Next.js 15 + TypeScript + Supabase + Radix UI + Tailwind**.

Decision yang paling signifikan: **auth pakai middleware**, bukan per-page check. Itu bikin routing protection jadi deklaratif — satu file middleware.ts bisa handle semua protected routes.

Insight: bikin website komunitas itu tricky. Terlalu formal = anggota nggak mau kontribusi. Terlalu informal = nggak kredibel di mata orang luar. Middle ground-nya: **structured content, personal voice**.

#nextjs #supabase #community #fullstack
