// Default values jika dokumen "contact" belum diisi di Studio
const FALLBACK = {
  whatsapp: '6282260740023',
  email: 'ifradlisyaifa03@gmail.com',
  instagram: 'https://www.instagram.com/radilsyaiff/',
  linkedin: 'https://www.linkedin.com/in/ifradil-syaifa-218a252a7/',
  github: 'https://github.com/ifradev-me',
  responseTime: '1 jam',
  bioShort: 'Front-end developer yang passionate dalam menciptakan solusi digital yang inovatif dan user-friendly.',
}

export const withFallback = (contact) => ({ ...FALLBACK, ...(contact || {}) })

export const waLink = (contact) => {
  const c = withFallback(contact)
  const digits = String(c.whatsapp).replace(/\D/g, '')
  return `https://wa.me/${digits}`
}

export const mailLink = (contact) => {
  const c = withFallback(contact)
  return `mailto:${c.email}`
}

export const prettyWa = (contact) => {
  const c = withFallback(contact)
  const d = String(c.whatsapp).replace(/\D/g, '')
  // 6282260740023 → +62 822-6074-0023
  if (d.startsWith('62') && d.length >= 11) {
    return `+${d.slice(0, 2)} ${d.slice(2, 5)}-${d.slice(5, 9)}-${d.slice(9)}`
  }
  return `+${d}`
}
