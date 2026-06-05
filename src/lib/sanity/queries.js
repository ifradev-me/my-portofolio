import { client } from './client'

const PROJECT_FIELDS = `
  _id,
  name,
  "slug": slug.current,
  description,
  image,
  techStack,
  demoUrl,
  githubUrl,
  duration,
  views,
  status,
  order
`

const SERVICE_FIELDS = `
  _id,
  title,
  tag,
  emoji,
  image,
  features,
  description,
  accent,
  ctaHref,
  order
`

const POST_LIST_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  coverImage,
  tags
`

const POST_DETAIL_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  coverImage,
  tags,
  author,
  body
`

const TESTIMONIAL_FIELDS = `
  _id,
  name,
  role,
  image,
  message,
  rating,
  order
`

const CONTACT_FIELDS = `
  whatsapp,
  email,
  instagram,
  linkedin,
  github,
  responseTime,
  bioShort
`

export const getProjects = () =>
  client.fetch(`*[_type == "project"] | order(order asc, _createdAt desc) { ${PROJECT_FIELDS} }`)

export const getServices = () =>
  client.fetch(`*[_type == "service"] | order(order asc, _createdAt desc) { ${SERVICE_FIELDS} }`)

export const getPosts = () =>
  client.fetch(`*[_type == "post"] | order(publishedAt desc) { ${POST_LIST_FIELDS} }`)

export const getPostBySlug = (slug) =>
  client.fetch(`*[_type == "post" && slug.current == $slug][0] { ${POST_DETAIL_FIELDS} }`, { slug })

export const getPostSlugs = () =>
  client.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`)

export const getTestimonials = () =>
  client.fetch(`*[_type == "testimonial"] | order(order asc, _createdAt desc) { ${TESTIMONIAL_FIELDS} }`)

export const getContact = () =>
  client.fetch(`*[_type == "contact"][0] { ${CONTACT_FIELDS} }`)
