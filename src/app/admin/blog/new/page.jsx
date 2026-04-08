'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewBlogPost() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [tags, setTags] = useState('')
  const [content, setContent] = useState('')
  const [published, setPublished] = useState(false)

  const generateSlug = (val) => val.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    setSlug(generateSlug(e.target.value))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title, slug, excerpt,
        tags: tags.split(',').map(t => t.trim()).filter(Boolean),
        content, published,
      }),
    })

    if (res.ok) {
      router.push('/admin/blog')
      router.refresh()
    } else {
      const data = await res.json()
      setError(data.error || 'Gagal membuat post.')
      setLoading(false)
    }
  }

  const inputClass = `w-full bg-background-800 border border-background-700 rounded-xl px-4 py-3
    font-body text-sm text-text-100 placeholder:text-text-700
    focus:outline-none focus:border-primary-gold-700 focus:ring-1 focus:ring-primary-gold-900
    transition-all duration-200`

  const labelClass = "font-body block text-text-600 text-xs uppercase tracking-wider font-semibold mb-1.5"

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="font-header font-bold text-text-50 text-3xl">Post Baru</h1>
        <p className="font-body text-text-500 text-sm mt-1">Tulis konten markdown baru untuk blog.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className={labelClass}>Judul</label>
          <input type="text" required placeholder="Judul post..."
            value={title} onChange={handleTitleChange} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Slug (URL)</label>
          <input type="text" required placeholder="judul-post-anda"
            value={slug} onChange={(e) => setSlug(e.target.value)} className={inputClass} />
          <p className="font-body text-text-700 text-xs mt-1">/blog/{slug || 'slug-post'}</p>
        </div>

        <div>
          <label className={labelClass}>Excerpt</label>
          <input type="text" placeholder="Deskripsi singkat..."
            value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Tags (pisah dengan koma)</label>
          <input type="text" placeholder="next.js, react, tips"
            value={tags} onChange={(e) => setTags(e.target.value)} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Konten (Markdown)</label>
          <textarea required rows={16} placeholder="# Judul&#10;&#10;Isi konten markdown di sini..."
            value={content} onChange={(e) => setContent(e.target.value)}
            className={`${inputClass} resize-y font-mono`} />
        </div>

        <div className="flex items-center gap-3">
          <button type="button"
            onClick={() => setPublished(!published)}
            className={`relative w-10 h-6 rounded-full transition-colors duration-200
              ${published ? 'bg-primary-blue' : 'bg-background-700'}`}>
            <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-200
              ${published ? 'left-5' : 'left-1'}`} />
          </button>
          <span className="font-body text-sm text-text-400">
            {published ? 'Published' : 'Draft'}
          </span>
        </div>

        {error && <p className="font-body text-red-400 text-sm">{error}</p>}

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={loading}
            className="font-body font-bold text-sm px-6 py-3 rounded-xl
              bg-primary-blue text-text-50 hover:bg-primary-blue-700
              transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? 'Menyimpan...' : 'Simpan Post'}
          </button>
          <button type="button" onClick={() => router.back()}
            className="font-body text-sm px-6 py-3 rounded-xl border border-background-700
              text-text-500 hover:bg-background-800 hover:text-text-300 transition-colors">
            Batal
          </button>
        </div>
      </form>
    </div>
  )
}
