---
title: "Culture X: Catatan Build-in-Public dari Proyek Frontend yang Masih Ditata"
excerpt: "Tidak semua proyek layak di-share setelah selesai. Kadang justru lebih berguna share saat masih di-build. Ini catatan proses Culture X."
date: "2026-04-22"
tags: ["culture-x", "react", "appwrite", "framer-motion", "buildinpublic"]
published: true
---

# Culture X: Catatan Build-in-Public dari Proyek Frontend yang Masih Ditata

Saya tulis post ini sengaja sebelum proyek Culture X selesai. Filosofinya sederhana: **build in public bukan berarti nunjukin hasil sempurna — tapi nunjukin proses**.

## Kondisi Saat Ini

Culture X masih di tahap yang saya sebut "skeleton kuat + visi belum tegas". Struktur folder, stack, dan dependency sudah tersusun. Tapi:

- README-nya masih minim.
- Belum ada deploy preview.
- Fitur inti masih di-iterate di kepala.

Kalau Anda liat repo-nya sekarang, Anda akan bingung "ini apa?" — dan itu jawaban yang jujur karena saya pun masih menyusun cerita-nya.

## Stack yang Dipilih

Meski visi belum final, ada beberapa keputusan yang sudah tegas:

- **React + Vite** — DX cepat, build cepat. Untuk proyek eksplorasi di tahap awal, speed iteration jauh lebih penting dari pattern "correct".
- **Appwrite** — backend-as-a-service. Saya pengen fokus di frontend dulu; backend yang ready-to-use (auth + DB + storage) hemat waktu setup.
- **Framer Motion** — animasi yang feel premium. Culture X punya vibe yang "bergerak", jadi animation jadi bukan ornamen tapi bagian UX.
- **lucide-react** — icon library yang modern, konsisten, tree-shakeable.

## Kenapa Appwrite, Bukan Supabase?

Pertanyaan yang sering muncul. Jawaban pragmatis:

Saya punya proyek lain (Nutrisight, wa-file-transfer) yang juga pakai Appwrite. Konsolidasi di satu BaaS bikin konteks switch lebih ringan. Kalau semua proyek pakai tool yang sama, saya jadi lebih "expert" di tool itu, daripada jadi "familiar" di banyak tool.

Ini bukan argumen Appwrite vs Supabase secara objektif — cuma argumen "pilih yang konsisten dengan ecosystem Anda".

## Yang Saya Cari Feedback-nya

Kalau Anda familiar dengan:
- **Appwrite** + **Framer Motion** combo — bagaimana handle loading state yang smooth?
- **React + Vite** untuk proyek medium-complex — best practice folder structure?
- Pattern animation-heavy frontend yang masih perform baik di mobile low-end

...saya sangat appreciate insight-nya. DM saya.

## Next Milestone

Minggu-minggu ke depan:

1. Finalize **core feature set** — apa Culture X sebenarnya? Community platform? Content showcase? Creative portfolio? Saya masih memutuskan.
2. Tulis **README lengkap** — begitu feature set jelas, dokumentasi ikut jelas.
3. Deploy **preview** untuk dapat feedback dari orang lain.

## Pelajaran dari Tahap Awal

1. **Skeleton tegas + visi blur itu normal** di awal proyek eksplorasi. Yang penting stack decision sudah solid biar nggak perlu rewrite nanti.
2. **Build in public bukan anti-pattern.** Share saat bingung = dapat masukan. Share saat sempurna = cuma applause.
3. **Konsistensi ecosystem (satu BaaS, satu framework utama) > best-of-breed per proyek.** Cognitive load lebih ringan.

Update progress akan saya tulis lagi saat ada milestone signifikan. Stay tuned.

Stack: React + Vite + Appwrite + Framer Motion + lucide-react.
