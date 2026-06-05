export const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nama', type: 'string', validation: (R) => R.required() },
    {
      name: 'slug', title: 'Slug', type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (R) => R.required(),
    },
    {
      name: 'image', title: 'Gambar / Screenshot', type: 'image',
      options: { hotspot: true },
      validation: (R) => R.required(),
    },
    { name: 'description', title: 'Deskripsi', type: 'text', rows: 3, validation: (R) => R.required().max(280) },
    {
      name: 'techStack', title: 'Tech Stack', type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    { name: 'demoUrl', title: 'Link Demo', type: 'url', description: 'Kosongkan jika tidak ada — tombol Demo otomatis disembunyikan' },
    { name: 'githubUrl', title: 'Link GitHub', type: 'url', description: 'Kosongkan jika tidak ada — tombol Source Code otomatis disembunyikan' },
    { name: 'duration', title: 'Durasi', type: 'string', description: 'Mis. "2 weeks", "~ ongoing"' },
    { name: 'views', title: 'Views', type: 'string', description: 'Opsional. Mis. "± 112"' },
    {
      name: 'status', title: 'Status', type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'Beta', value: 'beta' },
          { title: 'Pending', value: 'pending' },
          { title: 'Internal', value: 'internal' },
          { title: 'In Development', value: 'development' },
        ],
        layout: 'radio',
      },
      initialValue: 'completed',
    },
    { name: 'order', title: 'Urutan tampil', type: 'number', initialValue: 100 },
  ],
  preview: {
    select: { title: 'name', subtitle: 'status', media: 'image' },
  },
  orderings: [
    { title: 'Urutan tampil', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
}
