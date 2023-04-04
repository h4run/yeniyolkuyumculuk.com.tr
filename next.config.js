/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  unstable_runtimeJS: false
}

module.exports = nextConfig
