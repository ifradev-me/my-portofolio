import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { getAllTestimonials } from '@/lib/testimonials'

export const metadata = { title: 'Dashboard — Admin Ifrad Dev' }

export default function AdminDashboard() {
  const posts = getAllPosts()
  const testimonials = getAllTestimonials()

  const publishedPosts = posts.filter(p => p.published).length
  const draftPosts = posts.length - publishedPosts
  const pendingTestimonials = testimonials.filter(t => !t.approved).length
  const approvedTestimonials = testimonials.filter(t => t.approved).length

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="font-header font-bold text-text-50 text-3xl">Dashboard</h1>
        <p className="font-body text-text-500 text-sm mt-1">Selamat datang kembali, Ifrad.</p>
      </div>

      {/* Warning banner */}
      <div className="mb-8 p-4 rounded-xl border border-yellow-800/50 bg-yellow-900/10 flex gap-3">
        <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p className="font-body text-yellow-400/80 text-sm">
          File create/delete hanya berfungsi saat running <strong>lokal</strong>. Di Vercel, filesystem read-only.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Post Published" value={publishedPosts} color="gold" />
        <StatCard label="Post Draft" value={draftPosts} color="dim" />
        <StatCard label="Testimoni Approved" value={approvedTestimonials} color="blue" />
        <StatCard label="Testimoni Pending" value={pendingTestimonials} color="red" />
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="p-6 rounded-2xl border border-background-700 bg-background-900">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-header font-bold text-text-100 text-lg">Blog</h2>
            <Link href="/admin/blog/new"
              className="font-body text-xs font-semibold px-3 py-1.5 rounded-lg
                bg-primary-blue text-text-50 hover:bg-primary-blue-700 transition-colors">
              + Post Baru
            </Link>
          </div>
          <p className="font-body text-text-500 text-sm mb-4">
            {posts.length} total post — {publishedPosts} published, {draftPosts} draft
          </p>
          <Link href="/admin/blog"
            className="font-body text-sm text-primary-gold-400 hover:text-primary-gold-300 transition-colors">
            Kelola Blog →
          </Link>
        </div>

        <div className="p-6 rounded-2xl border border-background-700 bg-background-900">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-header font-bold text-text-100 text-lg">Testimoni</h2>
            {pendingTestimonials > 0 && (
              <span className="font-body text-xs font-semibold px-2.5 py-1 rounded-full
                bg-red-900/40 text-red-400 border border-red-800/50">
                {pendingTestimonials} pending
              </span>
            )}
          </div>
          <p className="font-body text-text-500 text-sm mb-4">
            {testimonials.length} total — {approvedTestimonials} approved, {pendingTestimonials} menunggu review
          </p>
          <Link href="/admin/testimoni"
            className="font-body text-sm text-primary-gold-400 hover:text-primary-gold-300 transition-colors">
            Kelola Testimoni →
          </Link>
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value, color }) {
  const colors = {
    gold: 'text-primary-gold-400',
    blue: 'text-primary-blue-400',
    red: 'text-red-400',
    dim: 'text-text-500',
  }
  return (
    <div className="p-4 rounded-xl border border-background-700 bg-background-900">
      <p className={`font-header font-bold text-3xl ${colors[color] ?? colors.dim}`}>{value}</p>
      <p className="font-body text-text-600 text-xs mt-1">{label}</p>
    </div>
  )
}
