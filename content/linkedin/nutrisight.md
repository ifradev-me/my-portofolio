---
title: "Offline-first di mobile app: pelajaran dari Nutrisight"
date: "2026-04-22"
tags: ["react-native", "expo", "appwrite", "openrouter", "offline-first"]
platform: "linkedin"
---

Salah satu keputusan arsitektur terbaik yang saya buat di **Nutrisight** (aplikasi mobile pelacak nutrisi AI): **offline-first dari hari pertama**.

Nutrisight bisa dipakai tanpa internet. User foto makanan, AI analisis, data tercatat — semua jalan lokal. Saat koneksi kembali, sync otomatis ke cloud.

Cara kerjanya:

1. Setiap aksi (scan foto, tambah makanan, ubah profil) langsung simpan ke AsyncStorage lokal → UI update instantly
2. Aksi masuk ke **SyncQueue** — antrian persisten yang survive restart app
3. `SyncManager` proses antrian di background saat online, pakai prioritas (auth dulu, lalu data makanan, lalu menu)

Pattern ini: **Strategy Pattern** per tipe data. Setiap domain (auth, meal, menu, photo) punya strategy sync sendiri dengan max retry dan prioritas berbeda.

Kenapa ini penting untuk aplikasi Indonesia? Koneksi masih spotty di banyak daerah. Kalau app block user aksi sambil tunggu server, UX rusak. Offline-first = app tetap terasa cepat dan responsif selalu.

Stack: React Native + Expo + TypeScript + NativeWind + Appwrite + OpenRouter (GPT-4o vision + GPT-4.1-turbo untuk weekly summary).

Kalau kamu build mobile app dengan koneksi tidak stabil sebagai concern — offline-first bukan optional, itu requirement.

#reactnative #expo #offlinefirst #mobiledev #appwrite
