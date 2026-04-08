import { NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { createPost } from '@/lib/posts'

export async function POST(request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { title, slug, excerpt, tags, content, published } = await request.json()

  if (!title || !slug || !content) {
    return NextResponse.json({ error: 'title, slug, dan content wajib diisi.' }, { status: 400 })
  }

  try {
    createPost({ title, slug, excerpt, tags, content, published })
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
