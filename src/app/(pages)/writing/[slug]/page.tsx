import Container from '@/app/components/generic/Container';
import Heading from '@/app/components/generic/Heading';
import MDXContent from '@/app/components/generic/MDXComponents';
import Separator from '@/app/components/generic/Separator';
import CopyButton from '@/app/components/ui/CopyButton';
import FocusedReading from '@/app/components/ui/FocusedReading';
import InlineLink from '@/app/components/ui/InlineLink';
import Navigation from '@/app/components/ui/Navigation/Navigation';
import '@/app/styles/prose.css';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Params {
  params: { slug: string };
}

export async function generateStaticParams() {
  return allPosts.map(({ slug }) => ({
    slug: slug
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const { title, publishedAt, summary, slug, image } = post;

  const ogImage = image ? `https://7ub1.vercel.app${image}` : 'https://7ub1.vercel.app/og.jpeg';

  return {
    title,
    publisher: '7amdi',
    authors: [{ name: '7amdi' }],
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      publishedTime: publishedAt,
      url: `https://7ub1.vercel.app/writing/${slug}`,
      images: [
        {
          url: ogImage,
          alt: summary
        }
      ]
    },
    twitter: {
      site: '@7amdi911',
      card: 'summary_large_image',
      creator: '@ana7amdi',
      title,
      description: summary,
      images: [
        {
          url: ogImage,
          alt: summary
        }
      ]
    }
  };
}

export default async function Post({ params }: Params) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const {
    title,
    publishedAt,
    body: { code }
  } = post;

  return (
    <Container>
      <header className="flex flex-col justify-between gap-6">
        <span>
          <InlineLink
            href="/writing"
            ariaLabel="Back to writing page"
            arrowIcon
            hideUnderline
            className="transition-colors hover:text-secondary dark:hover:text-secondary-dark"
          >
            Writing
          </InlineLink>
        </span>
        <Heading>{title}</Heading>
      </header>
      <div className="mb-6 flex items-center justify-between text-sm">
        <time dateTime={publishedAt} className="text-secondary dark:text-secondary-dark">
          {format(parseISO(publishedAt), 'MMMM dd yyyy')}
        </time>
        <CopyButton />
      </div>
      <FocusedReading>
        <MDXContent code={code} />
      </FocusedReading>
      <Separator className="my-8" />
      <Navigation allItems={allPosts} currentItem={post} route="writing" />
    </Container>
  );
}
