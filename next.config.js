/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Netlify tidak menjalankan image optimizer Next (/_next/image) secara andal,
    // jadi gambar di-serve apa adanya. Ini bikin <Image> lokal & remote tampil normal.
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
}

module.exports = nextConfig
