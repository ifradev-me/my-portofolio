import Link from 'next/link'
import { getPostBySlug, getPublishedPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getPublishedPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return { title: `${post.title} — Ifrad Dev`, description: post.excerpt }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-background-950 py-20 px-5 sm:px-8 lg:px-16 relative overflow-hidden">

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Back */}
        <Link href="/blog" className="font-body text-text-400 text-sm hover:text-primary-gold-400 transition-colors mb-8 inline-block">
          ← Kembali ke Blog
        </Link>

        {/* Header */}
        <div className="mb-10">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map(tag => (
                <span key={tag}
                  className="font-body text-[10px] font-semibold px-2 py-0.5 rounded-full
                    border border-primary-gold-700 text-primary-gold-400 bg-primary-gold-950/30 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-header font-bold text-text-50 leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            {post.title}
          </h1>

          <p className="font-body text-text-400 text-sm">
            {new Date(post.date).toLocaleDateString('id-ID', {
              day: 'numeric', month: 'long', year: 'numeric'
            })}
          </p>

          <div className="mt-6 border-t border-primary-gold-800/40" />
        </div>

        {/* Content */}
        <article
          className="prose-custom font-body"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          style={{
            color: '#e0d9c4',
            lineHeight: '1.8',
          }}
        />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-primary-gold-800/40">
          <Link href="/blog"
            className="font-body text-sm font-semibold text-primary-gold-600
              hover:text-primary-gold-500 transition-colors">
            ← Baca tulisan lainnya
          </Link>
        </div>
      </div>

      {/* Prose styles inline */}
      <style>{`
        .prose-custom h1, .prose-custom h2, .prose-custom h3 {
          color: #fdf8e1;
          font-family: georgia, serif;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .prose-custom h2 { font-size: 1.5rem; }
        .prose-custom h3 { font-size: 1.25rem; }
        .prose-custom p { margin-bottom: 1.25rem; color: #e0d9c4; }
        .prose-custom a { color: #fbbf24; text-decoration: underline; }
        .prose-custom a:hover { color: #ffc300; }
        .prose-custom strong { color: #fdf8e1; font-weight: 600; }
        .prose-custom em { color: #c8c0ad; font-style: italic; }
        .prose-custom code {
          background: #001a44;
          color: #fbbf24;
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          font-size: 0.875rem;
        }
        .prose-custom pre {
          background: #001233;
          border: 1px solid #003566;
          border-radius: 12px;
          padding: 1.25rem;
          overflow-x: auto;
          margin-bottom: 1.5rem;
        }
        .prose-custom pre code {
          background: transparent;
          color: #fdf8e1;
          padding: 0;
        }
        .prose-custom ul, .prose-custom ol {
          color: #e0d9c4;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .prose-custom li { margin-bottom: 0.4rem; }
        .prose-custom blockquote {
          border-left: 3px solid #ffc300;
          padding-left: 1rem;
          color: #c8c0ad;
          font-style: italic;
          margin: 1.5rem 0;
        }
        .prose-custom hr {
          border-color: #ffd60a;
          margin: 2rem 0;
        }
      `}</style>
    </main>
  )
}
