'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/admin')
      router.refresh()
    } else {
      setError('Password salah. Coba lagi.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background-950 flex items-center justify-center px-5">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-gold-800 to-primary-blue-800
            flex items-center justify-center mx-auto mb-4">
            <span className="font-header font-bold text-text-50 text-xl">I</span>
          </div>
          <h1 className="font-header font-bold text-text-50 text-2xl">Admin Panel</h1>
          <p className="font-body text-text-600 text-sm mt-1">Ifrad Dev Portfolio</p>
        </div>

        {/* Form */}
        <div className="p-px rounded-2xl"
          style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.3), rgba(30,58,138,0.2))' }}>
          <div className="bg-background-900 rounded-[15px] p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-body block text-text-600 text-xs uppercase tracking-wider font-semibold mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-background-800 border border-background-700 rounded-xl px-4 py-3
                    font-body text-sm text-text-100 placeholder:text-text-700
                    focus:outline-none focus:border-primary-gold-700 focus:ring-1 focus:ring-primary-gold-900
                    transition-all duration-200"
                />
              </div>

              {error && (
                <p className="font-body text-red-400 text-xs">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-body font-bold text-sm
                  bg-primary-blue text-text-50 hover:bg-primary-blue-700
                  transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Masuk...' : 'Masuk'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
