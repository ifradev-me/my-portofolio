import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'content/blog')

function ensureDir() {
  if (!fs.existsSync(postsDir)) fs.mkdirSync(postsDir, { recursive: true })
}

export function getAllPosts() {
  ensureDir()
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  const posts = files.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
    const { data } = matter(raw)
    return { slug, ...data }
  })
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPublishedPosts() {
  return getAllPosts().filter(p => p.published)
}

export async function getPostBySlug(slug) {
  const filepath = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(filepath)) return null
  const raw = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(html).process(content)
  return { slug, ...data, contentHtml: processed.toString() }
}

export function createPost({ title, slug, excerpt, tags, content, published }) {
  ensureDir()
  const frontmatter = matter.stringify(content, {
    title,
    excerpt,
    date: new Date().toISOString().split('T')[0],
    tags: tags || [],
    published: !!published,
  })
  fs.writeFileSync(path.join(postsDir, `${slug}.md`), frontmatter)
}

export function deletePost(slug) {
  const filepath = path.join(postsDir, `${slug}.md`)
  if (fs.existsSync(filepath)) fs.unlinkSync(filepath)
}
