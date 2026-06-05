// One-shot migrator: content/blog/*.md → Sanity "post" documents.
// Usage:
//   1. Make sure .env.local has NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN
//   2. node --env-file=.env.local scripts/migrate-blog-to-sanity.mjs
//
// Re-runs are safe: each post uses a deterministic _id derived from filename,
// so re-running creates-or-replaces the same doc instead of duplicating.

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in env')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-10-01',
  token,
  useCdn: false,
})

const dir = path.join(process.cwd(), 'content', 'blog')
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))

console.log(`Found ${files.length} markdown files. Pushing only published ones...`)

let pushed = 0
let skipped = 0

for (const file of files) {
  const raw = fs.readFileSync(path.join(dir, file), 'utf8')
  const { data, content } = matter(raw)

  if (!data.published) {
    skipped++
    continue
  }

  const slug = file.replace(/\.md$/, '')
  const docId = `post.${slug}`

  const doc = {
    _id: docId,
    _type: 'post',
    title: data.title || slug,
    slug: { _type: 'slug', current: slug },
    publishedAt: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    excerpt: data.excerpt || '',
    body: content.trim(),
    tags: Array.isArray(data.tags) ? data.tags : [],
    author: 'Ifradil Syaifa',
  }

  await client.createOrReplace(doc)
  pushed++
  console.log(`  ✓ ${slug}`)
}

console.log(`\nDone. Pushed ${pushed}, skipped ${skipped} unpublished.`)
