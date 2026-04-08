import Link from 'next/link'

const techStack = [
  { name: 'React',        color: 'text-primary-blue-300   border-primary-blue-800   bg-primary-blue-950/50'   },
  { name: 'Next.js',      color: 'text-text-200           border-background-600     bg-background-800/50'      },
  { name: 'Node.js',      color: 'text-green-400          border-green-900          bg-green-950/40'           },
  { name: 'TailwindCSS',  color: 'text-primary-blue-400   border-primary-blue-900   bg-primary-blue-950/40'   },
  { name: 'baileys.js',   color: 'text-green-300          border-green-800          bg-green-950/30'           },
  { name: 'Python',       color: 'text-primary-gold-400   border-primary-gold-900   bg-primary-gold-950/30'   },
  { name: 'Express',      color: 'text-text-300           border-background-600     bg-background-800/40'      },
  { name: 'MongoDB',      color: 'text-green-400          border-green-900          bg-green-950/40'           },
]

const AboutMeSection = () => {
  return (
    <section className="relative min-h-screen py-20 px-5 sm:px-8 lg:px-16 overflow-hidden bg-background-950">

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orb */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 20% 20%, rgba(0,41,107,0.08) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-2/5 h-2/5 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 80%, rgba(255,195,0,0.06) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary-gold animate-pulse inline-block" />
            <span className="font-body text-text-300 text-xs uppercase tracking-widest font-semibold">
              Tentang Saya
            </span>
          </div>

          <h2 className="font-header font-bold text-text-50 leading-none"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}>
            Siapa{' '}
            <span className="text-primary-gold-400">Ifrad?</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* LEFT — Bio */}
          <div className="lg:col-span-3 space-y-6">
            <p className="font-body text-text-200 text-lg leading-relaxed">
              Di dunia yang serba cepat, kami percaya inovasi adalah jalan hidup terbaik.
              <span className="text-primary-gold-400 font-semibold"> Ifrad Dev</span> lahir dari semangat
              membantu UMKM agar tidak ketinggalan zaman. Saya sudah lama berkecimpung di dunia teknologi,
              dan menyadari banyak pemilik usaha masih kesulitan memahami teknologi.
            </p>

            <p className="font-body text-text-200 text-lg leading-relaxed">
              Lewat Ifrad Dev, kami tidak hanya membangun solusi teknologi — kami juga
              <span className="text-text-50 font-medium"> membimbing klien memahami cara kerjanya.</span>{' '}
              Nilai kami: Inovasi, edukasi, dan kemudahan.
            </p>

            {/* Quote */}
            <div className="relative pl-5 border-l-2 border-primary-gold-700 py-2">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary-gold-600" />
              <p className="font-body text-text-200 text-base italic leading-relaxed">
                &ldquo;Dalam dunia yang serba cepat ini, inovasi adalah jalan hidup terbaik.&rdquo;
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                className="btn-disabled font-body font-bold text-sm px-7 py-3 rounded-xl
                  bg-primary-gold-800 text-background-950
                  transition-all duration-300"
              >
                Download CV
              </button>
              <Link href="/blog">
                <button className="font-body font-semibold text-sm px-7 py-3 rounded-xl
                  border border-text-300 text-text-100
                  hover:border-primary-gold-400 hover:text-primary-gold-400
                  transition-all duration-300">
                  Blog →
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT — Tech Stack */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-5 rounded-2xl bg-background-900 border border-background-700">
              <p className="font-body text-text-300 text-xs uppercase tracking-widest font-semibold mb-4">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map(({ name, color }) => (
                  <span
                    key={name}
                    className={`font-body text-xs font-semibold px-3 py-1.5 rounded-full border ${color}`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: '20+', label: 'Klien Puas'       },
                { num: '2+',  label: 'Tahun Exp.'        },
                { num: '100%', label: 'Kepuasan'         },
                { num: '∞',   label: 'Ide Kreatif'       },
              ].map(({ num, label }) => (
                <div key={label} className="p-4 rounded-2xl bg-background-900 border border-background-700 text-center">
                  <div className="font-header font-bold text-primary-gold-400 leading-none"
                    style={{ fontSize: '1.8rem' }}>
                    {num}
                  </div>
                  <div className="font-body text-text-300 text-xs uppercase tracking-wide mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
