'use client'

import { useState } from 'react'

const KontakForm = () => {
  const [nama, setNama] = useState('')
  const [kebutuhan, setKebutuhan] = useState('')
  const [pesan, setPesan] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const number = 6282260740023
    const message = `hai, saya ${nama}, dan tertarik dengan ${kebutuhan}, saya bermaksud ${pesan}`
    const link = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    window.open(link, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="lg:col-span-3">
      <div className="p-px rounded-3xl"
        style={{ background: 'linear-gradient(135deg, rgba(255,195,0,0.4), rgba(0,41,107,0.3) 60%, rgba(255,195,0,0.1))' }}>
        <div className="bg-white rounded-[23px] p-6 sm:p-8">
          <form onSubmit={onSubmit} className="space-y-5">

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-body block text-text-500 text-xs uppercase tracking-wider font-semibold mb-1.5">
                  Nama
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama kamu"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full bg-background-50 border border-primary-gold-200 rounded-xl px-4 py-3
                    font-body text-sm text-primary-blue placeholder:text-text-400
                    focus:outline-none focus:border-primary-gold-400 focus:ring-1 focus:ring-primary-gold-200
                    transition-all duration-200 caret-primary-gold-600"
                />
              </div>
              <div>
                <label className="font-body block text-text-500 text-xs uppercase tracking-wider font-semibold mb-1.5">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="628123456789"
                  className="w-full bg-background-50 border border-primary-gold-200 rounded-xl px-4 py-3
                    font-body text-sm text-primary-blue placeholder:text-text-400
                    focus:outline-none focus:border-primary-gold-400 focus:ring-1 focus:ring-primary-gold-200
                    transition-all duration-200 caret-primary-gold-600"
                />
              </div>
            </div>

            <div>
              <label className="font-body block text-text-500 text-xs uppercase tracking-wider font-semibold mb-1.5">
                Kebutuhan Utama
              </label>
              <select
                required
                value={kebutuhan}
                onChange={(e) => setKebutuhan(e.target.value)}
                className="w-full bg-background-50 border border-primary-gold-200 rounded-xl px-4 py-3
                  font-body text-sm text-primary-blue-700
                  focus:outline-none focus:border-primary-gold-400 focus:ring-1 focus:ring-primary-gold-200
                  transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">Pilih layanan...</option>
                <option value="Pembuatan Website">Pembuatan Website</option>
                <option value="Otomatisasi WhatsApp">Otomatisasi WhatsApp</option>
                <option value="Pembuatan Website dan Otomatisasi WhatsApp">Keduanya</option>
                <option value="layanan lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label className="font-body block text-text-500 text-xs uppercase tracking-wider font-semibold mb-1.5">
                Pesan
              </label>
              <textarea
                required
                rows={5}
                placeholder="Ceritakan kebutuhan atau idemu di sini..."
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                className="w-full bg-background-50 border border-primary-gold-200 rounded-xl px-4 py-3
                  font-body text-sm text-primary-blue placeholder:text-text-400 resize-none
                  focus:outline-none focus:border-primary-gold-400 focus:ring-1 focus:ring-primary-gold-200
                  transition-all duration-200 caret-primary-gold-600"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-4 rounded-xl font-body font-bold text-base transition-all duration-300
                ${sent
                  ? 'bg-background-200 text-text-500 cursor-default'
                  : 'bg-primary-blue text-background-50 hover:bg-primary-blue-700 hover:-translate-y-0.5 hover:shadow-lg'
                }`}
            >
              {sent ? '✓ Membuka WhatsApp...' : '💬 Kirim via WhatsApp'}
            </button>

            <p className="font-body text-text-400 text-xs text-center">
              Pesanmu akan diteruskan langsung ke WhatsApp saya
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default KontakForm
