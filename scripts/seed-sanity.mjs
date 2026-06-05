// One-shot seeder: push original portfolio data into Sanity.
// Uploads images from /public to Sanity asset store, then creates documents
// referencing those assets. Idempotent — uses deterministic _id, so re-running
// updates instead of duplicating.
//
// Usage: node --env-file=.env.local scripts/seed-sanity.mjs

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-10-01',
  token,
  useCdn: false,
})

const publicDir = path.join(process.cwd(), 'public')

const uploadedImages = new Map()
async function uploadImage(relPath) {
  if (uploadedImages.has(relPath)) return uploadedImages.get(relPath)
  const full = path.join(publicDir, relPath)
  if (!fs.existsSync(full)) {
    console.warn(`  ! image not found: ${relPath}`)
    return null
  }
  const stream = fs.createReadStream(full)
  const filename = path.basename(relPath)
  const asset = await client.assets.upload('image', stream, { filename })
  const ref = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
  uploadedImages.set(relPath, ref)
  console.log(`  ↑ uploaded ${filename}`)
  return ref
}

// ---------- Projects ----------
const PROJECTS = [
  { image: 'botAbsen.png', name: 'Bot Absensi Otomatis', description: 'Bot absensi otomatis dengan integrasi notifikasi absensi lewat WhatsApp', techStack: ['Express', 'MongoDB', 'Puppeteer', 'Baileys JS'], githubUrl: 'https://github.com/ifradev-me/absen-auto', duration: '7 weeks', views: '± 112', status: 'completed' },
  { image: 'IoT.png', name: 'IoT Dashboard', description: 'Website IoT dashboard dengan visual interaktif untuk monitoring data sensor secara real-time', techStack: ['React', 'Python', 'Flask', 'FastAPI', 'SQLite'], demoUrl: 'https://colab.research.google.com/drive/1_KlDIy9WBLs1G07lWhXEsYok2VE7Livo', duration: '3 weeks', views: 'under 50', status: 'completed' },
  { image: 'sii.png', name: 'Islamic Event Landing Page', description: 'Landing page islami dengan fitur galeri foto dan testimoni untuk event SII 2025', techStack: ['Bootstrap', 'Google Cloud API', 'App Script', 'Vercel'], githubUrl: 'https://github.com/ifradev-me/SII-2025', duration: '3 weeks', views: '± 100', status: 'completed' },
  { image: 'culture x perkenalan budaya aceh dan umkm.png', name: 'Culture X', description: 'Platform pengenalan budaya Aceh dan pendampingan UMKM Aceh berbasis AI, dibangun dengan React TypeScript dan Appwrite', techStack: ['React TS', 'Appwrite', 'OpenRouter'], githubUrl: 'https://github.com/ifradev-me/culture-x_frontend_main', duration: '~ ongoing', status: 'beta' },
  { image: 'fanfic translator.png', name: 'Fanfic Translator', description: 'Alat penerjemahan fanfic otomatis via workflow n8n dan AI, dikembangkan untuk kebutuhan internal', techStack: ['n8n', 'OpenRouter'], duration: '~ 2 weeks', status: 'internal' },
  { image: 'konsitech-platform edukasi hukum.png', name: 'Konsitech', description: 'Platform edukasi hukum yang membantu masyarakat memahami konstitusi dan hukum Indonesia secara mudah melalui AI', techStack: ['React JS', 'Express', 'OpenRouter'], githubUrl: 'https://github.com/ifradev-me/frontend-konsi-tech', duration: '~ ongoing', status: 'completed' },
  { image: 'kroeng usk - organisasi kampus.png', name: 'Kroeng USK', description: 'Landing page untuk komunitas robotika engineering Universitas Syiah Kuala, sudah production namun menunggu persetujuan internal', techStack: ['Next.js', 'Express'], githubUrl: 'https://github.com/ifradev-me/kroeng-usk', duration: '~ 3 weeks', status: 'pending' },
  { image: 'menu makanan warkop mjd kupi.png', name: 'Warkop MJD', description: 'Website menu lauk dan minuman interaktif untuk Warkop MJD, bukan sekedar landing page tapi platform menu digital', techStack: ['React JS', 'Cloudflare'], githubUrl: 'https://github.com/ifradev-me/demo-mjd', duration: '~ 2 weeks', status: 'completed' },
  { image: 'nutrisight.png', name: 'NutriSight', description: 'Aplikasi Android untuk deteksi dan pemahaman gizi keluarga, difokuskan untuk ibu. Saat ini dalam tahap beta test terbatas', techStack: ['React Native TS', 'OpenRouter'], githubUrl: 'https://github.com/nutrisight-innovilage/nutrisight_apps', duration: '~ ongoing', status: 'beta' },
]

// ---------- Services ----------
const SERVICES = [
  {
    image: 'webdev.png', title: 'Jasa Pembuatan Website', tag: 'Web Development', emoji: '🌐',
    features: ['Landing Page', 'Portfolio', 'Toko Online', 'Company Profile'],
    accent: 'gold',
    description: 'Website profesional, cepat, dan mudah dikelola bahkan tanpa pengalaman teknis. Ifrad Dev tidak hanya membangun, tapi juga membuatmu paham cara memanfaatkannya.',
  },
  {
    image: 'automation.jpeg', title: 'Jasa Otomatisasi CS', tag: 'WhatsApp Bot', emoji: '🤖',
    features: ['Auto-Reply', 'Catat Pesanan', 'Pengingat Otomatis', 'Multi-Agent'],
    accent: 'blue',
    description: 'Bot kami membantu UMKM meningkatkan pelayanan tanpa nambah karyawan — dengan auto-reply, pencatatan pesanan, dan pengingat otomatis yang langsung siap pakai.',
  },
]

// ---------- Run ----------
console.log('Seeding projects...')
let order = 10
for (const p of PROJECTS) {
  const image = await uploadImage(p.image)
  const slug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const doc = {
    _id: `project.${slug}`,
    _type: 'project',
    name: p.name,
    slug: { _type: 'slug', current: slug },
    description: p.description,
    techStack: p.techStack || [],
    duration: p.duration || '',
    views: p.views || '',
    status: p.status || 'completed',
    order,
    ...(image && { image }),
    ...(p.demoUrl && { demoUrl: p.demoUrl }),
    ...(p.githubUrl && { githubUrl: p.githubUrl }),
  }
  await client.createOrReplace(doc)
  console.log(`  ✓ project: ${p.name}`)
  order += 10
}

console.log('\nSeeding services...')
order = 10
for (const s of SERVICES) {
  const image = await uploadImage(s.image)
  const slug = s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  await client.createOrReplace({
    _id: `service.${slug}`,
    _type: 'service',
    title: s.title,
    tag: s.tag,
    emoji: s.emoji,
    features: s.features,
    description: s.description,
    accent: s.accent,
    order,
    ...(image && { image }),
  })
  console.log(`  ✓ service: ${s.title}`)
  order += 10
}

console.log('\nSeeding testimonials from content/testimoni/...')
const tdir = path.join(process.cwd(), 'content', 'testimoni')
const tfiles = fs.existsSync(tdir) ? fs.readdirSync(tdir).filter(f => f.endsWith('.md')) : []
order = 10
for (const file of tfiles) {
  const raw = fs.readFileSync(path.join(tdir, file), 'utf8')
  const { data, content } = matter(raw)
  const id = file.replace(/\.md$/, '')
  await client.createOrReplace({
    _id: `testimonial.${id}`,
    _type: 'testimonial',
    name: data.name,
    role: [data.role, data.company].filter(Boolean).join(' · '),
    message: content.trim(),
    rating: Number(data.rating) || 5,
    order,
  })
  console.log(`  ✓ testimonial: ${data.name}`)
  order += 10
}

console.log('\nSeeding Kontak (singleton)...')
const contactDoc = await client.fetch(`*[_id == "contact"][0]`)
if (contactDoc) {
  console.log('  · contact already exists — leaving untouched')
} else {
  await client.createOrReplace({
    _id: 'contact',
    _type: 'contact',
    whatsapp: '6282260740023',
    email: 'ifradlisyaifa03@gmail.com',
    instagram: 'https://www.instagram.com/radilsyaiff/',
    linkedin: 'https://www.linkedin.com/in/ifradil-syaifa-218a252a7/',
    github: 'https://github.com/ifradev-me',
    responseTime: '1 jam',
    bioShort: 'Front-end developer yang passionate dalam menciptakan solusi digital yang inovatif dan user-friendly.',
  })
  console.log('  ✓ contact')
}

console.log('\nDone.')
