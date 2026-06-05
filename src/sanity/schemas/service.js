export const service = {
  name: 'service',
  title: 'Layanan',
  type: 'document',
  fields: [
    { name: 'title', title: 'Judul', type: 'string', validation: (R) => R.required() },
    { name: 'tag', title: 'Tag', type: 'string', description: 'Mis. "Web Development"' },
    { name: 'emoji', title: 'Emoji', type: 'string', description: 'Mis. 🌐 atau 🤖' },
    {
      name: 'image', title: 'Gambar', type: 'image',
      options: { hotspot: true },
      validation: (R) => R.required(),
    },
    {
      name: 'features', title: 'Fitur unggulan', type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    { name: 'description', title: 'Deskripsi', type: 'text', rows: 3, validation: (R) => R.required() },
    {
      name: 'accent', title: 'Aksen warna', type: 'string',
      options: {
        list: [
          { title: 'Gold', value: 'gold' },
          { title: 'Blue', value: 'blue' },
        ],
        layout: 'radio',
      },
      initialValue: 'gold',
    },
    { name: 'ctaHref', title: 'Link CTA', type: 'url', description: 'Default: link WhatsApp dari Kontak' },
    { name: 'order', title: 'Urutan tampil', type: 'number', initialValue: 100 },
  ],
  preview: {
    select: { title: 'title', subtitle: 'tag', media: 'image' },
  },
  orderings: [
    { title: 'Urutan tampil', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
}
