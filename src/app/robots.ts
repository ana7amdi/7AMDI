import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: 'https://ana7amdi.vercel.app/sitemap.xml',
    host: 'https://ana7amdi.vercel.app'
  };
}
