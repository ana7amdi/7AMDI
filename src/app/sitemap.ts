import { allPosts } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

function formatDate(date: Date) {
  return date.toISOString().split('T')[0];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map(({ slug }) => ({
    url: `https://7madi.vercel.app/writing/${slug}`,
    lastModified: formatDate(new Date())
  }));


  const routes = ['', '/now', '/writing'].map((route) => ({
    url: `https://7madi.vercel.app${route}`,
    lastModified: formatDate(new Date())
  }));

  return [...routes, ...posts];
}
