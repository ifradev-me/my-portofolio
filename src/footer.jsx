import { withFallback, waLink, mailLink, prettyWa } from './lib/sanity/contact.helpers'

const Footer = ({ contact }) => {
  const c = withFallback(contact)

  return (
    <footer className="bg-background-950 text-background-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3 font-header">Ifradil Syaifa</h3>
            <p className="text-text-300 text-sm leading-relaxed font-body">
              {c.bioShort}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 font-header">Kontakku</h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <a href={mailLink(c)} className="text-text-300 hover:text-primary-gold-400 transition-colors">
                  📧 {c.email}
                </a>
              </li>
              <li>
                <a href={waLink(c)} className="text-text-300 hover:text-primary-gold-400 transition-colors">
                  📞 {prettyWa(c)}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background-800 pt-6 text-center">
          <p className="text-text-400 text-sm font-body">
            © {new Date().getFullYear()} Ifrad — Built with Spirit, React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
