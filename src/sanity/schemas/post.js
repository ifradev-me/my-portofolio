export const post = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Judul', type: 'string', validation: (R) => R.required() },
    {
      name: 'slug', title: 'Slug', type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R) => R.required(),
    },
    { name: 'publishedAt', title: 'Tanggal terbit', type: 'datetime', validation: (R) => R.required() },
    {
      name: 'coverImage', title: 'Cover image', type: 'image',
      options: { hotspot: true },
    },
    { name: 'excerpt', title: 'Ringkasan', type: 'text', rows: 2, validation: (R) => R.max(220) },
    {
      name: 'body', title: 'Isi (Markdown)', type: 'text', rows: 20,
      description: 'Tulis dalam format Markdown — heading (#), list, link, dll.',
      validation: (R) => R.required(),
    },
    { name: 'author', title: 'Penulis', type: 'string', initialValue: 'Ifradil Syaifa' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } },
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'coverImage' },
  },
  orderings: [
    { title: 'Terbaru', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
}
