import Link from 'next/link'
import { getPublishedPosts } from '@/lib/posts'

export const metadata = {
  title: 'Blog — Ifrad Dev',
  description: 'Tips web development, WhatsApp automation, dan teknologi untuk UMKM',
}

export default function BlogPage() {
  const posts = getPublishedPosts()

  return (
    <main className="min-h-screen bg-background-50 py-20 px-5 sm:px-8 lg:px-16 relative overflow-hidden">

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,41,107,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,41,107,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,195,0,0.08) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <Link href="/" className="font-body text-text-500 text-sm hover:text-primary-gold-600 transition-colors mb-6 inline-block">
            ← Kembali ke Home
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary-gold-600 animate-pulse inline-block" />
            <span className="font-body text-text-500 text-xs uppercase tracking-widest font-semibold">
              Tulisan & Cerita
            </span>
          </div>
          <h1 className="font-header font-bold text-primary-blue leading-none"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}>
            Blog<span className="text-primary-gold-600">.</span>
          </h1>
          <p className="font-body text-primary-blue-700 text-lg mt-3 max-w-xl">
            Sharing tentang web dev, WA automation, dan tips teknologi untuk bisnis kamu.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-body text-text-500 text-lg">Belum ada post. Segera hadir!</p>
          </div>
        ) : (
          <div className="space-y-5">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group p-6 rounded-2xl border border-primary-gold-200 bg-white
                  hover:border-primary-gold-400 transition-all duration-300 hover:-translate-y-0.5
                  hover:shadow-lg shadow-sm cursor-pointer">

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.map(tag => (
                        <span key={tag}
                          className="font-body text-[10px] font-semibold px-2 py-0.5 rounded-full
                            border border-primary-gold-300 text-primary-gold-700 bg-primary-gold-50 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <h2 className="font-header font-bold text-primary-blue text-xl mb-2
                    group-hover:text-primary-gold-600 transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="font-body text-primary-blue-700 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="font-body text-text-400 text-xs">
                      {new Date(post.date).toLocaleDateString('id-ID', {
                        day: 'numeric', month: 'long', year: 'numeric'
                      })}
                    </span>
                    <span className="font-body text-primary-gold-600 text-xs font-semibold
                      group-hover:text-primary-gold-500 transition-colors">
                      Baca selengkapnya →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
