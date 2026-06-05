import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from './env'

const isDev = process.env.NODE_ENV !== 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Di dev: matikan CDN cache + tampilkan drafts (gak perlu klik Publish saat ngedit)
  // Di prod: pakai CDN + cuma dokumen yang sudah di-Publish
  useCdn: !isDev,
  perspective: isDev ? 'drafts' : 'published',
  ...(isDev && process.env.SANITY_API_WRITE_TOKEN
    ? { token: process.env.SANITY_API_WRITE_TOKEN }
    : {}),
})
