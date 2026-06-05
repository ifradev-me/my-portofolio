export const contact = {
  name: 'contact',
  title: 'Kontak (Singleton)',
  type: 'document',
  // singleton — hanya ada satu dokumen
  fields: [
    { name: 'whatsapp', title: 'WhatsApp (tanpa +, mis. 6282260740023)', type: 'string', validation: (R) => R.required() },
    { name: 'email', title: 'Email', type: 'string', validation: (R) => R.required().email() },
    { name: 'instagram', title: 'URL Instagram', type: 'url' },
    { name: 'linkedin', title: 'URL LinkedIn', type: 'url' },
    { name: 'github', title: 'URL GitHub', type: 'url' },
    { name: 'responseTime', title: 'Estimasi balas', type: 'string', initialValue: '1 jam' },
    { name: 'bioShort', title: 'Bio singkat (footer)', type: 'text', rows: 2 },
  ],
  preview: {
    prepare: () => ({ title: 'Kontak' }),
  },
}
