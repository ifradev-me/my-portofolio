import Link from 'next/link'
import { getApprovedTestimonials } from '@/lib/testimonials'

export const metadata = {
  title: 'Testimoni — Ifrad Dev',
  description: 'Apa kata klien tentang layanan Ifrad Dev',
}

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`w-4 h-4 ${i <= rating ? 'text-primary-gold-500' : 'text-background-200'}`}
          fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimoniPage() {
  const testimonials = getApprovedTestimonials()

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
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 20% 80%, rgba(0,41,107,0.06) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <Link href="/" className="font-body text-text-500 text-sm hover:text-primary-gold-600 transition-colors mb-6 inline-block">
            ← Kembali ke Home
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary-gold-600 animate-pulse inline-block" />
            <span className="font-body text-text-500 text-xs uppercase tracking-widest font-semibold">
              Kata Mereka
            </span>
          </div>
          <h1 className="font-header font-bold text-primary-blue leading-none"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}>
            Testimoni<span className="text-primary-gold-600">.</span>
          </h1>
          <p className="font-body text-primary-blue-700 text-lg mt-3 max-w-xl">
            Kepuasan klien adalah prioritas utama kami.
          </p>
        </div>

        {/* Grid */}
        {testimonials.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-body text-text-500 text-lg">Belum ada testimoni.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <div key={t.filename}
                className="p-6 rounded-2xl border border-primary-gold-200 bg-white
                  hover:border-primary-gold-400 transition-all duration-300 shadow-sm">

                {/* Rating */}
                <StarRating rating={t.rating} />

                {/* Content */}
                <p className="font-body text-primary-blue-700 text-sm leading-relaxed mt-4 mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-primary-gold-200">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-gold-500 to-primary-blue
                    flex items-center justify-center text-white font-header font-bold text-lg flex-shrink-0">
                    {t.name?.[0]?.toUpperCase()}
                  </div>
                  <div>
                    <p className="font-body text-primary-blue text-sm font-semibold">{t.name}</p>
                    <p className="font-body text-text-500 text-xs">
                      {t.role}{t.company ? ` · ${t.company}` : ''}
                    </p>
                  </div>
                  <span className="ml-auto font-body text-text-400 text-xs">
                    {new Date(t.date).toLocaleDateString('id-ID', { month: 'short', year: 'numeric' })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-white border border-primary-gold-200 shadow-sm">
            <span className="font-body text-text-500 text-sm">Pernah kerja sama dengan saya?</span>
            <a href="https://wa.me/6282260740023" target="_blank" rel="noreferrer">
              <button className="font-body text-sm font-bold px-5 py-2.5 rounded-xl
                bg-primary-blue text-background-50 hover:bg-primary-blue-700
                hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                💬 Kirim Testimoni
              </button>
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}
