const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Ifradil Syaifa</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Front end developer yang passionate dalam menciptakan 
              solusi digital yang inovatif dan user-friendly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Kontakku</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:ifradlisyafa03@gmail.com" className="text-slate-300 hover:text-white transition-colors">📧 ifradlisyafa03@gmail.com</a></li>
              <li><a href="wa.me/6282260740023" className="text-slate-300 hover:text-white transition-colors">📞 +6282260740023</a></li>
            </ul>
          </div>

         
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Ifrad|| Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;