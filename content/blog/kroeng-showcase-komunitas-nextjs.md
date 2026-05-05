---
title: "Kroeng Community Showcase: Website untuk Komunitas yang Ingin Menampilkan Diri"
excerpt: "Bukan portofolio individu, bukan company profile. Website komunitas Kroeng menengahi antara keduanya — dengan Next.js 15 + Supabase."
date: "2026-04-22"
tags: ["kroeng", "nextjs", "supabase", "fullstack", "community"]
published: true
---

# Kroeng Community Showcase: Website untuk Komunitas yang Ingin Menampilkan Diri

Brief awal proyek ini sederhana: **"Kita butuh website yang bisa nunjukin ke orang luar apa aja yang anggota Kroeng bisa lakukan."**

Bukan website company profile — karena bukan company. Bukan portofolio individu — karena bukan satu orang. Sesuatu di antaranya.

## Menyelesaikan Ambiguitas Brief

Langkah pertama saya bukan nulis kode. Tapi nanya balik:

1. Siapa target pembaca? — Calon partner, klien, atau anggota baru.
2. Apa yang perlu mereka ambil setelah kunjungi site? — Gambaran konkret "komunitas ini bisa apa" + cara kontak.
3. Siapa yang maintain konten? — Anggota itu sendiri, secara kolaboratif.

Dari jawaban ini, struktur konten jadi jelas:
- **Knowledge base** — anggota share skill/insight sebagai artikel
- **News** — update kegiatan komunitas
- **Achievements** — showcase pencapaian anggota
- **Gallery** — visual proof dari event/project

## Stack Pilihan

- **Next.js 15** — server components, app router, static generation untuk halaman marketing, dynamic untuk dashboard anggota
- **TypeScript** — kolaborasi tim butuh type safety
- **Supabase** — auth + Postgres + storage dalam satu paket. Setup cepat, hosting managed
- **Radix UI** — primitive accessible, headless
- **Tailwind** — styling yang konsisten

## Keputusan Arsitektur: Middleware Auth

Salah satu decision yang saya suka: **proteksi route pakai middleware Next.js, bukan per-page check.**

```typescript
// middleware.ts (pseudocode)
export async function middleware(request: NextRequest) {
  const { session } = await supabase.auth.getSession()

  const pathname = request.nextUrl.pathname
  const isProtected = pathname.startsWith('/dashboard') ||
                      pathname.startsWith('/contribute')

  if (isProtected && !session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
```

Dengan satu file ini, semua protected route otomatis ter-protect. Nggak ada chance programmer baru lupa nge-check auth di page baru.

## Content Management: Lewat Supabase, Bukan CMS Eksternal

Anggota butuh bisa add/edit konten sendiri. Opsi yang saya pertimbangkan:

1. **Headless CMS (Sanity, Contentful)** — fleksibel tapi satu more layanan untuk dibayar dan dipelajari.
2. **Custom admin panel** — penuh kontrol, tapi butuh bikin UI CRUD.
3. **Supabase Studio untuk power user + form sederhana di site untuk user umum** — pilihan saya.

Supabase Studio sudah include UI admin yang cukup untuk maintainer. Sementara anggota umum pakai form custom di site untuk submit knowledge base article — lebih user-friendly.

## Status + Next Steps

Status sekarang: **active development**. Git history-nya masih aktif bulan ini. Yang sudah:
- Setup Next.js 15 production-grade
- Middleware auth jalan
- Struktur routing semua section
- Environment terkonfigurasi

Yang belum:
- Konten real (masih placeholder)
- Gallery upload flow dari UI
- News editor untuk non-technical member

## Pelajaran

1. **Brief ambigu = tanya balik, bukan asumsi.** Setengah design work adalah nanya pertanyaan yang benar.
2. **Middleware auth lebih scalable daripada per-page check.** Sekali setup, semua route ikut.
3. **Jangan adopsi CMS kalau belum tahu pain point real.** Supabase Studio sudah cukup untuk banyak use case community-scale.

Stack: Next.js 15 + TypeScript + Supabase + Radix UI + Tailwind + Vercel.
