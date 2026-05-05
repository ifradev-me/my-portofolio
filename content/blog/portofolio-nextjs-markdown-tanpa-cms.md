---
title: "Membangun Blog Portofolio dengan Next.js + Markdown (Tanpa CMS)"
excerpt: "Site portofolio yang Anda baca ini saya bangun sendiri dengan Next.js + markdown. Ini ceritanya — kenapa saya pilih approach minimalis, bukan CMS."
date: "2026-04-22"
tags: ["portofolio", "nextjs", "markdown", "static site"]
published: true
---

# Membangun Blog Portofolio dengan Next.js + Markdown (Tanpa CMS)

Site yang Anda baca ini saya bangun sendiri. Bukan Wordpress. Bukan Medium. Bukan Substack. Bukan builder. **Next.js + markdown — itu saja.**

## Kenapa Tanpa CMS?

Saya pertimbangkan beberapa opsi:

1. **Wordpress** — familiar, banyak plugin. Tapi overhead hosting + security update + plugin zombie.
2. **Ghost** — clean, lebih cepat dari WP. Tapi butuh hosting terpisah, $9/bulan minimal.
3. **Sanity / Contentful (headless)** — fleksibel, tapi satu more service untuk dibayar dan dipelajari.
4. **Next.js + markdown files in repo** — statis, gratis hosting di Vercel, semua konten version-controlled.

Pilihan saya: **opsi 4**.

Alasan utama: **kontrol penuh dan portabilitas**. Konten saya adalah file `.md` di repo Git. Kalau suatu hari Next.js tidak cool lagi, saya tinggal migrasi file-file itu ke framework lain. Nggak ada vendor lock-in.

## Struktur File

```
project_random/portofolio/
├── content/
│   ├── blog/
│   │   ├── selamat-datang.md
│   │   ├── membangun-wa-bot-dengan-baileys.md
│   │   └── ... (post lain)
│   ├── linkedin/
│   │   └── ... (draft LinkedIn post)
│   └── testimoni/
│       └── ... (testimoni klien)
├── src/
│   └── app/
│       ├── page.tsx (homepage)
│       ├── blog/
│       │   ├── page.tsx (list)
│       │   └── [slug]/page.tsx (detail)
│       └── ...
└── next.config.js
```

## Markdown Engine

Saya pakai **`gray-matter`** + **`remark-html`**:

- `gray-matter` untuk parse frontmatter (YAML di atas file) dan pisah dari body.
- `remark-html` untuk convert markdown body jadi HTML.

Frontmatter format yang saya pakai:

```yaml
---
title: "Judul post"
excerpt: "Short description untuk card preview"
date: "2026-04-22"
tags: ["tag1", "tag2"]
published: true
---
```

Field `published` saya pakai untuk hide draft dari list publik.

## Static Generation

Next.js app router punya fitur `generateStaticParams` + server components. Saat build time, Next.js baca semua `.md` file di `content/blog/`, generate static HTML per post. Hasilnya:

- Page load instan (nggak ada server round-trip)
- SEO-friendly (HTML siap disajikan crawler)
- Cost hosting nol di Vercel free tier

## Trade-off yang Jelas

**Plus**:
- Kontrol penuh layout dan styling
- Konten version-controlled (git history per post)
- Deploy gratis di Vercel
- Bundle kecil, load cepat
- Markdown portable ke mana-mana

**Minus**:
- **Nggak bisa edit dari HP**. Tapi ternyata ini fitur, bukan bug — setup-nya "ribet" bikin saya menulis lebih serius.
- Gambar harus saya upload manual ke folder `public/` atau external CDN
- Nggak ada comment system built-in (pakai Giscus / Disqus kalau butuh)

## Path Evolusi ke Depan

Yang mau saya tambahkan:
- Halaman **proyek** (grid showcase proyek portofolio) — sekarang cuma ada blog
- **Dark mode** toggle
- **RSS feed** (untuk yang mau subscribe via reader)
- **Cari/filter** blog by tag

Tapi saya tahan diri untuk tidak over-engineer. Site ini tujuannya sederhana: tempat saya berbagi proses kerja. Kalau fitur nggak langsung serve tujuan itu, skip.

## Pelajaran

1. **Tool sesuai kebutuhan.** Saya nggak butuh CMS multi-editor. Saya butuh tempat menulis. Markdown + Git cukup.
2. **Portabilitas > fancy features.** Platform datang dan pergi. File `.md` di Git akan tetap bisa dibaca 10 tahun lagi.
3. **"Setup ribet" bisa jadi fitur.** Friction yang pas bikin Anda menulis serius, bukan spam.

Source bisa saya share kalau ada yang tertarik — DM saya.

Stack: Next.js 15 + React 19 + gray-matter + remark-html + Tailwind + Vercel.
