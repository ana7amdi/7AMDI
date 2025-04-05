import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: 'https://7ub1.vercel.app/sitemap.xml',
    host: 'https://7ub1.vercel.app'
  };
}
