/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
        allowedOrigins: ['mathiasappelmans.be'],
      },
    reactCompiler: true,
    cacheComponents: true, // Enables PPR and better caching
  },
};

export default nextConfig;
