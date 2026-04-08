import Link from 'next/link'
import { getAllPosts, deletePost } from '@/lib/posts'
import { revalidatePath } from 'next/cache'

export const metadata = { title: 'Kelola Blog — Admin Ifrad Dev' }

async function handleDelete(formData) {
  'use server'
  const slug = formData.get('slug')
  deletePost(slug)
  revalidatePath('/admin/blog')
  revalidatePath('/blog')
}

export default function AdminBlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-header font-bold text-text-50 text-3xl">Blog</h1>
          <p className="font-body text-text-500 text-sm mt-1">{posts.length} post total</p>
        </div>
        <Link href="/admin/blog/new"
          className="font-body text-sm font-semibold px-4 py-2.5 rounded-xl
            bg-primary-blue text-text-50 hover:bg-primary-blue-700 transition-colors">
          + Post Baru
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-body text-text-600">Belum ada post.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.slug}
              className="flex items-center gap-4 p-4 rounded-xl border border-background-700 bg-background-900
                hover:border-background-600 transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-body text-text-100 text-sm font-semibold truncate">{post.title}</p>
                  <span className={`flex-shrink-0 font-body text-xs px-2 py-0.5 rounded-full
                    ${post.published
                      ? 'bg-green-900/40 text-green-400 border border-green-800/50'
                      : 'bg-background-800 text-text-600 border border-background-700'}`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-body text-text-600 text-xs">{post.date}</p>
                  {post.tags?.length > 0 && (
                    <div className="flex gap-1">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="font-body text-xs text-text-700 bg-background-800 px-1.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <Link href={`/blog/${post.slug}`} target="_blank"
                  className="font-body text-xs text-text-600 hover:text-text-300 px-3 py-1.5 rounded-lg
                    hover:bg-background-800 transition-colors">
                  Preview
                </Link>
                <form action={handleDelete}>
                  <input type="hidden" name="slug" value={post.slug} />
                  <button type="submit"
                    className="font-body text-xs text-red-500 hover:text-red-400 px-3 py-1.5 rounded-lg
                      hover:bg-red-900/20 transition-colors"
                    onClick={(e) => { if (!confirm(`Hapus post "${post.title}"?`)) e.preventDefault() }}>
                    Hapus
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
