---
title: "Portofolio saya dibangun dengan Next.js + markdown. Tanpa CMS."
date: "2026-04-22"
tags: ["nextjs", "markdown", "portfolio", "vercel"]
platform: "linkedin"
---

Website portofolio yang Anda kunjungi ini saya bangun sendiri. Tanpa CMS. Tanpa Wordpress. Tanpa builder.

Stack: **Next.js 15 + React 19 + markdown (gray-matter + remark-html) + deployed ke Vercel**.

Kenapa tanpa CMS?

1. **Kontrol penuh.** Kalau saya mau ubah layout, saya ubah kode — bukan plugin setting.
2. **Markdown = portable.** Kalau Next.js suatu hari "tidak cool lagi" (hahaha), semua konten tinggal di-migrate. Format tetap ke mana-mana.
3. **Git = history.** Saya bisa lihat revisi tiap post, rollback kalau salah, review kalau perlu.
4. **Build time.** Static generation = page load instan.

Trade-off yang jelas: **saya nggak bisa edit dari HP**. Tapi ternyata itu fitur, bukan bug. Saya jadi menulis lebih serius karena setup-nya "lebih ribet".

File structure:
```
content/blog/*.md    → blog post
content/testimoni/*  → testimoni klien
content/linkedin/*   → draft LinkedIn post (baru ditambah)
```

Sederhana. Tapi cukup.

#nextjs #markdown #portfolio #minimalism
