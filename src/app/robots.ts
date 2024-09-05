import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: 'https://7madi.vercel.app/sitemap.xml',
    host: 'https://7madi.vercel.app'
  };
}
