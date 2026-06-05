// Custom desk structure — Kontak dipaksa jadi singleton (cuma 1 dokumen)
export const structure = (S) =>
  S.list()
    .title('Konten')
    .items([
      S.listItem()
        .title('Kontak')
        .id('contact')
        .child(S.document().schemaType('contact').documentId('contact')),
      S.divider(),
      S.documentTypeListItem('project').title('Project'),
      S.documentTypeListItem('service').title('Layanan'),
      S.documentTypeListItem('post').title('Blog'),
      S.documentTypeListItem('testimonial').title('Testimoni'),
    ])
