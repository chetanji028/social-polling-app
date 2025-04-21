 
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['your-supabase-project-id.supabase.co'] // if you serve images
    }
  }
  
  module.exports = nextConfig
  