export default {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  },
  // Evitar eval en desarrollo para cumplir CSP estrictas (p. ej., si se embebe en iframes)
  webpack: (config: any, { dev, isServer }: { dev: boolean; isServer: boolean }) => {
    if (dev && !isServer) {
      config.devtool = 'source-map';
    }
    return config;
  }
};
