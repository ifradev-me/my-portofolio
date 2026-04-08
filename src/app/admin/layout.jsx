import Link from 'next/link'
import LogoutButton from './LogoutButton'

export const metadata = { title: 'Admin — Ifrad Dev' }

export default async function AdminLayout({ children }) {

  return (
    <div className="min-h-screen bg-background-950 flex">

      {/* Sidebar */}
      <aside className="w-56 flex-shrink-0 border-r border-background-700 bg-background-900 flex flex-col">
        <div className="p-5 border-b border-background-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-gold-800 to-primary-blue-800
              flex items-center justify-center flex-shrink-0">
              <span className="font-header font-bold text-text-50 text-sm">I</span>
            </div>
            <div>
              <p className="font-body text-text-100 text-sm font-semibold">Admin</p>
              <p className="font-body text-text-600 text-xs">Ifrad Dev</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          <Link href="/admin"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-body text-sm text-text-400
              hover:bg-background-800 hover:text-text-100 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            Dashboard
          </Link>
          <Link href="/admin/blog"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-body text-sm text-text-400
              hover:bg-background-800 hover:text-text-100 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Blog
          </Link>
          <Link href="/admin/testimoni"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-body text-sm text-text-400
              hover:bg-background-800 hover:text-text-100 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z" />
            </svg>
            Testimoni
          </Link>
        </nav>

        <div className="p-3 border-t border-background-700 space-y-1">
          <Link href="/" target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-body text-sm text-text-500
              hover:bg-background-800 hover:text-text-300 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Lihat Site
          </Link>
          <LogoutButton />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-8">
        {children}
      </main>
    </div>
  )
}
