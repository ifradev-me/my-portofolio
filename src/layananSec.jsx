const LayananSection = () => {
  const userTotal = 100;

  const layananData = [
    {
      id: 1,
      userTotal,
      img: "/webdev.png",
      title: "Jasa Pembuatan Website",
      tag: "Web Development",
      emoji: "🌐",
      features: ["Landing Page", "Portfolio", "Toko Online", "Company Profile"],
      accentClass: "text-primary-gold-600",
      borderHover: "hover:border-primary-gold-400",
      tagClass: "text-primary-gold-700 border-primary-gold-300 bg-primary-gold-50",
      pillClass: "text-primary-gold-700 border-primary-gold-300 bg-primary-gold-50",
      ctaClass: "bg-primary-gold-500 hover:bg-primary-gold-400 text-primary-blue-800",
      description:
        "Website profesional, cepat, dan mudah dikelola bahkan tanpa pengalaman teknis. Ifrad Dev tidak hanya membangun, tapi juga membuatmu paham cara memanfaatkannya.",
    },
    {
      id: 2,
      userTotal,
      img: "/automation.jpeg",
      title: "Jasa Otomatisasi CS",
      tag: "WhatsApp Bot",
      emoji: "🤖",
      features: ["Auto-Reply", "Catat Pesanan", "Pengingat Otomatis", "Multi-Agent"],
      accentClass: "text-green-600",
      borderHover: "hover:border-green-400",
      tagClass: "text-green-700 border-green-300 bg-green-50",
      pillClass: "text-green-700 border-green-300 bg-green-50",
      ctaClass: "bg-green-600 hover:bg-green-500 text-white",
      description:
        "Bot kami membantu UMKM meningkatkan pelayanan tanpa nambah karyawan — dengan auto-reply, pencatatan pesanan, dan pengingat otomatis yang langsung siap pakai.",
    },
  ];

  return (
    <section className="relative min-h-screen py-24 px-5 sm:px-8 lg:px-16 overflow-hidden bg-background-50">

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,41,107,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,41,107,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 15%, rgba(255,195,0,0.08) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 left-0 w-2/5 h-2/5 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 20% 85%, rgba(0,41,107,0.06) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="font-body inline-flex items-center gap-2 text-primary-gold-700
              border border-primary-gold-300 bg-primary-gold-50 rounded-full
              px-4 py-1.5 text-xs uppercase tracking-widest font-semibold">
              ✦ Apa yang saya tawarkan
            </span>
          </div>

          <h2 className="font-header font-bold text-primary-blue leading-none mb-4"
            style={{ fontSize: 'clamp(2.8rem, 9vw, 7rem)' }}>
            Layanan{' '}
            <span className="text-primary-gold-600">Kami</span>
          </h2>

          <p className="font-body text-primary-blue-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Solusi digital simpel, efektif, dan langsung bisa dipakai. Fokus kami:{' '}
            <span className="text-primary-gold-600 font-semibold">bantu UMKM naik level</span> tanpa bikin pusing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {layananData.map((l) => (
            <div
              key={l.id}
              className={`group relative bg-white rounded-3xl border border-primary-gold-200
                ${l.borderHover} overflow-hidden
                hover:-translate-y-2 transition-all duration-400 cursor-pointer shadow-sm hover:shadow-lg`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={l.img}
                  alt={l.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.95) 100%)' }} />

                {/* Tag */}
                <span className={`absolute top-4 left-4 font-body flex items-center gap-1.5
                  border rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider
                  backdrop-blur-sm ${l.tagClass}`}>
                  {l.emoji} {l.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className={`font-header font-bold text-primary-blue leading-tight text-2xl`}>
                  {l.title}
                </h3>

                <p className="font-body text-primary-blue-700 text-sm leading-relaxed">
                  {l.description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2">
                  {l.features.map(f => (
                    <span key={f}
                      className={`font-body inline-flex items-center gap-1 text-xs font-semibold
                        px-3 py-1 rounded-full border ${l.pillClass}`}>
                      ✓ {f}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-primary-gold-200" />

                {/* Bottom row */}
                <div className="flex items-center gap-4">
                  <div>
                    <div className={`font-header text-3xl leading-none ${l.accentClass}`}>
                      {l.userTotal}+
                    </div>
                    <div className="font-body text-text-500 text-xs uppercase tracking-wider font-semibold mt-0.5">
                      Klien Puas
                    </div>
                  </div>
                  <a href="https://wa.me/6282260740023" target="_blank" rel="noreferrer" className="flex-1">
                    <button className={`w-full py-3 rounded-xl font-body font-bold text-sm
                      transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${l.ctaClass}`}>
                      Konsultasi Gratis →
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-4 p-4 rounded-2xl
            bg-white border border-primary-gold-200 shadow-sm">
            <span className="font-body text-text-500 text-sm">Tidak yakin butuh apa?</span>
            <a href="https://wa.me/6282260740023" target="_blank" rel="noreferrer">
              <button className="font-body text-sm font-bold px-5 py-2.5 rounded-xl
                bg-primary-blue text-background-50 hover:bg-primary-blue-700
                hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                💬 Tanya Dulu, Gratis!
              </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LayananSection;