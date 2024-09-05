const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    typedRoutes: true
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/ana7amdiofo',
        permanent: true
      },
      {
        source: '/meet',
        destination: 'https://cal.com/ana7amdi/30min?layout=week_view',
        permanent: true
      },
      {
        source: '/x',
        destination: 'https://twitter.com/_gvoj',
        permanent: true
      },
      {
        source: '/cv',
        destination: 'https://read.cv/ana7amdiofo',
        permanent: true
      }
    ];
  }
};

module.exports = withContentlayer(nextConfig);
