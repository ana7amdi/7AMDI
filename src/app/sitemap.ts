import { allPosts } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

function formatDate(date: Date) {
  return date.toISOString().split('T')[0];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map(({ slug }) => ({
    url: `https://7ub1.vercel.app/writing/${slug}`,
    lastModified: formatDate(new Date())
  }));


  const routes = ['', '/6e6pi', '/writing'].map((route) => ({
    url: `https://7ub1.vercel.app${route}`,
    lastModified: formatDate(new Date())
  }));

  return [...routes, ...posts];
}
