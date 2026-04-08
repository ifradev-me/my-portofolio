import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const dir = path.join(process.cwd(), 'content/testimoni')

function ensureDir() {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

export function getAllTestimonials() {
  ensureDir()
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))
  return files.map(filename => {
    const raw = fs.readFileSync(path.join(dir, filename), 'utf8')
    const { data, content } = matter(raw)
    return { filename, content: content.trim(), ...data }
  }).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getApprovedTestimonials() {
  return getAllTestimonials().filter(t => t.approved)
}

export function updateApproval(filename, approved) {
  const filepath = path.join(dir, filename)
  const raw = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(raw)
  const updated = matter.stringify(content, { ...data, approved })
  fs.writeFileSync(filepath, updated)
}

export function deleteTestimonial(filename) {
  const filepath = path.join(dir, filename)
  if (fs.existsSync(filepath)) fs.unlinkSync(filepath)
}

export function createTestimonial({ name, role, company, rating, content }) {
  ensureDir()
  const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  const filename = `${slug}-${Date.now()}.md`
  const fileContent = matter.stringify(content, {
    name,
    role,
    company,
    rating: Number(rating),
    approved: false,
    date: new Date().toISOString().split('T')[0],
  })
  fs.writeFileSync(path.join(dir, filename), fileContent)
}
