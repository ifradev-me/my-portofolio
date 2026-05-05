---
title: "Nutrisight: Satu Ekosistem di Balik Aplikasi Pelacak Nutrisi"
excerpt: "Empat folder di repo saya yang ternyata satu sistem utuh — mobile app, landing page, dataset YOLO, dan dua pipeline data. Cerita arsitektur offline-first + AI vision di Nutrisight."
date: "2026-04-22"
tags: ["nutrisight", "expo", "react-native", "appwrite", "openrouter", "ai", "offline-first"]
published: true
---

# Nutrisight: Satu Ekosistem di Balik Aplikasi Pelacak Nutrisi

Waktu saya buka folder `aplikasi gizi nutrisight` di direktori saya, ada 4 sub-folder:

1. `nutrisight utama` — aplikasi mobile (React Native + Expo)
2. `NutrisightLandingPage` — landing page marketing
3. `nutrisight food to nutrition` — script batch pengisi data nutrisi
4. `nutrisight scrape` — scraper + importer katalog menu

Keempat ini adalah **satu ekosistem**. Bukan 4 proyek terpisah.

## Apa itu Nutrisight?

Nutrisight adalah **aplikasi mobile** untuk memantau asupan gizi harian. Caranya sederhana: foto makanan → AI analisis → kalori, protein, karbo, lemak tercatat otomatis.

Target pengguna bukan hanya ibu hamil atau atlet — tapi semua orang: anak-anak, remaja, dewasa, lansia, ibu hamil. Makanya kebutuhan nutrisi target disesuaikan per kategori user.

## App Utama: Offline-First Mobile

Ini produk yang dipakai end-user. Stack: **React Native 0.81 + Expo 54 + TypeScript**, dengan backend **Appwrite** (auth, database, storage) dan AI via **OpenRouter** (GPT-4o untuk vision, GPT-4.1-turbo untuk weekly summary).

Tiga cara catat makanan:
1. **Foto kamera** → analisis AI Vision langsung (paling sering dipakai)
2. **Pilih dari galeri** → sama seperti foto, sumber beda
3. **Cari manual** dari katalog menu lokal

Hal yang paling saya bangga: arsitektur **offline-first** yang solid. Setiap aksi user — scan foto, tambah makanan, edit profil — langsung disimpan ke AsyncStorage lokal dan tampil di UI. Tidak ada spinner tunggu server. Sync ke cloud jalan di background.

Ini dibangun dengan **Strategy Pattern**:

```
SyncManager
  ├── authSyncStrategy   (priority 1)
  ├── mealSyncStrategy   (priority 2)
  ├── photoSyncStrategy  (priority 2)
  └── menuSyncStrategy   (priority 4)
```

`SyncQueue` simpan antrian ke AsyncStorage — survive restart app. Saat koneksi kembali, semua item tertunda diproses otomatis berdasarkan prioritas.

## Pipeline Scrape: Mengisi Katalog Menu Awal

Sebelum ada katalog menu di Appwrite, saya perlu isi data dulu. `nutrisight scrape` adalah script Node.js yang:

1. Parse CSV daftar menu dari berbagai sumber
2. Upload data ke Appwrite collection `menu_items`
3. Bisa resume kalau berhenti di tengah (batch mode pakai `--resume`)

Hasilnya: ratusan item menu lokal Indonesia masuk ke database.

## Pipeline Nutrition Calculator: AI-Assisted, Kalkulasi Lokal

Setelah menu ada, field `calories`, `protein`, `fat`, `carbs` masih kosong. `nutrisight food to nutrition` mengisinya secara batch.

Alurnya unik: **AI tidak menghitung nutrisi — AI hanya parsing resep**.

1. Fetch semua item dari Appwrite yang belum punya data nutrisi
2. Kirim nama + bahan + cara masak ke **GPT-4.1 via OpenRouter**
3. AI output: teknik masak + estimasi gram tiap bahan
4. **Kalkulasi nutrisi dilakukan lokal** di `recipeNutritionCalculator.ts` — pakai database 45+ bahan Indonesia + faktor retensi per teknik masak (rebus, kukus, tumis, goreng dangkal, goreng dalam, panggang, dll)
5. Update record di Appwrite

Kenapa kalkulasi lokal, bukan minta AI langsung kasih angka? Karena angka nutrisi butuh konsistensi dan sumber data terverifikasi. AI bagus untuk interpretasi resep, tapi tidak sebagai kalkulator nutrisi yang presisi.

Script ini resumable lewat `nutrition-progress.json` — kalau berhenti di tengah 768 item karena timeout atau rate limit, tinggal jalankan ulang.

## Dataset YOLO: Riset Paralel

Folder `dataset/fase-1/` berisi dataset gambar + label format YOLO — arah riset untuk kemungkinan mengganti GPT-4o Vision dengan model deteksi makanan lokal/custom. Ini belum produksi, tapi relevan untuk menurunkan biaya API jangka panjang.

## Landing Page

`NutrisightLandingPage` adalah React + Vite + TypeScript — halaman marketing untuk mempromosikan aplikasi. Terpisah dari app mobile, jalan sendiri sebagai static site.

## Pelajaran Arsitektur

**Satu produk, banyak repo itu valid.** Yang penting tiap bagian punya tanggung jawab yang jelas:
- Mobile app = produk user-facing
- Script pipeline = tools operasional untuk isi/rawat data
- Landing page = marketing
- Dataset = riset jangka panjang

Kalau saya gabung semua dalam satu monorepo sekarang, justru mixed concern — script batch data seharusnya tidak hidup di dalam mobile app.

Stack ringkas: React Native + Expo + TypeScript + NativeWind + Appwrite + OpenRouter (GPT-4o + GPT-4.1) + Reanimated + Skia + Victory Native.
