export const testimonial = {
  name: 'testimonial',
  title: 'Testimoni',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nama', type: 'string', validation: (R) => R.required() },
    { name: 'role', title: 'Peran / Perusahaan', type: 'string' },
    {
      name: 'image', title: 'Foto', type: 'image',
      options: { hotspot: true },
    },
    { name: 'message', title: 'Pesan', type: 'text', rows: 4, validation: (R) => R.required() },
    {
      name: 'rating', title: 'Rating', type: 'number',
      validation: (R) => R.min(1).max(5),
      initialValue: 5,
    },
    { name: 'order', title: 'Urutan tampil', type: 'number', initialValue: 100 },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'image' },
  },
  orderings: [
    { title: 'Urutan tampil', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
}
