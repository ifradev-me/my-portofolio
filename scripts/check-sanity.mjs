// Diagnostik koneksi Sanity dari sisi server-side (sama persis dengan yang dipakai Next).
// Usage: node --env-file=.env.local scripts/check-sanity.mjs

import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

console.log('--- ENV ---')
console.log('projectId :', projectId || '(MISSING)')
console.log('dataset   :', dataset)
console.log('has token :', !!process.env.SANITY_API_WRITE_TOKEN)
console.log()

if (!projectId) {
  console.error('ERROR: NEXT_PUBLIC_SANITY_PROJECT_ID kosong. Set di .env.local lalu run lagi.')
  process.exit(1)
}

const baseConfig = { projectId, dataset, apiVersion: '2024-10-01', useCdn: false }

async function tryPerspective(perspective) {
  const c = createClient({
    ...baseConfig,
    perspective,
    ...(process.env.SANITY_API_WRITE_TOKEN
      ? { token: process.env.SANITY_API_WRITE_TOKEN }
      : {}),
  })
  const types = ['project', 'service', 'post', 'testimonial', 'contact']
  const results = {}
  for (const t of types) {
    try {
      results[t] = await c.fetch(`count(*[_type == "${t}"])`)
    } catch (err) {
      results[t] = `ERR: ${err.message}`
    }
  }
  return results
}

console.log('--- perspective: published ---')
console.log(await tryPerspective('published'))
console.log()

console.log('--- perspective: drafts ---')
console.log(await tryPerspective('drafts'))
console.log()

console.log('--- perspective: raw (semua, termasuk draft) ---')
console.log(await tryPerspective('raw'))
console.log()

console.log('--- semua _type yang ada di dataset ---')
const c = createClient({ ...baseConfig, perspective: 'raw',
  ...(process.env.SANITY_API_WRITE_TOKEN ? { token: process.env.SANITY_API_WRITE_TOKEN } : {}),
})
const allTypes = await c.fetch(`array::unique(*[!(_type match "system.*")]._type)`)
console.log(allTypes)
