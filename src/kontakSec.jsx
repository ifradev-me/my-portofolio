import { ChatIcon, GmailIcon, InstagramIcon, LinkedInIcon, GitHubIcon } from './component/Icon';
import KontakForm from './KontakForm';

const socialLinks = [
  { href: "https://www.instagram.com/radilsyaiff/",                  Icon: InstagramIcon, label: "Instagram" },
  { href: "https://www.linkedin.com/in/ifradil-syaifa-218a252a7/",   Icon: LinkedInIcon,  label: "LinkedIn"  },
  { href: "https://github.com/ifradev-me",                           Icon: GitHubIcon,    label: "GitHub"    },
  { href: "mailto:ifradlisyaifa03@gmail.com",                        Icon: GmailIcon,     label: "Gmail"     },
  { href: "https://wa.me/6282260740023",                             Icon: ChatIcon,      label: "WhatsApp"  },
];

const KontakSection = () => {

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

      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,195,0,0.07) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 w-2/5 h-2/5 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 20% 80%, rgba(30,58,138,0.12) 0%, transparent 65%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary-gold-600 animate-pulse inline-block" />
            <span className="font-body text-text-400 text-xs uppercase tracking-widest font-semibold">
              Hubungi Saya
            </span>
          </div>

          <h2 className="font-header font-bold text-text-50 leading-none"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}>
            Ngobrol{' '}
            <span className="text-primary-gold-400">Yuk!</span>
          </h2>

          <p className="font-body text-text-300 text-lg mt-3 max-w-xl leading-relaxed">
            Punya ide? Butuh website atau bot WhatsApp? Jangan ragu —
            saya siap bantu wujudkan bisnis digitalmu.
          </p>
        </div>

        {/* 2-col layout */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-5">

            {/* Contact cards */}
            {[
              { emoji: "📱", label: "WhatsApp", val: "+62 822-6074-0023", href: "https://wa.me/6282260740023" },
              { emoji: "✉️", label: "Email", val: "ifradlisyaifa03@gmail.com", href: "mailto:ifradlisyaifa03@gmail.com" },
            ].map(({ emoji, label, val, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-background-700
                  bg-background-800/40 hover:border-primary-gold-600 group transition-all duration-300">
                <span className="text-2xl">{emoji}</span>
                <div>
                  <div className="font-body text-text-400 text-xs uppercase tracking-wider font-semibold">{label}</div>
                  <div className="font-body text-text-100 text-sm font-medium mt-0.5 group-hover:text-primary-gold-400 transition-colors duration-300">
                    {val}
                  </div>
                </div>
              </a>
            ))}

            {/* Social */}
            <div>
              <p className="font-body text-text-400 text-xs uppercase tracking-widest font-semibold mb-3">
                Temukan saya di
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ href, Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" title={label}
                    className="w-11 h-11 flex items-center justify-center rounded-xl
                      bg-background-800/40 border border-background-700 text-text-300
                      hover:border-primary-gold-500 hover:text-primary-gold-400 hover:-translate-y-1
                      transition-all duration-200">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Online badge */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-background-800/40 border border-green-800/50">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0 inline-block" />
              <p className="font-body text-green-400 text-sm font-medium">
                Biasanya membalas dalam <strong>1 jam</strong>
              </p>
            </div>
          </div>

          {/* RIGHT — Form */}
          <KontakForm />

        </div>
      </div>
    </section>
  );
};

export default KontakSection;