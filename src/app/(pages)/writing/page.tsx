import Container from '@/app/components/generic/Container';
import Heading from '@/app/components/generic/Heading';
import Text from '@/app/components/generic/Text';
import InlineLink from '@/app/components/ui/InlineLink';
import List from '@/app/components/ui/List';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing',
  publisher: '7amdi',
  authors: [{ name: '7amdi' }],
  description: 'apah  apah  apah  apah  apah  apah  apah  apah  apah  apah  apah  apah  apah ',
  openGraph: {
    title: 'Writing',
    description: 'apah  apah  apah  apah  apah  apah  apah  apah  apah  apah  apah  apah  apah '
  },
  twitter: {
    title: 'Writing',
    site: '@_gvoj',
    creator: '@ana7amdi',
    card: 'summary',
    description: 'apah  apah  apah  apah  apah  apah  apah  apah  apah  apah  apah  apah  apah ',
    images: [
      {
        url: 'https://ana7amdi.vercel.app/og.jpeg',
        height: 1200,
        width: 1200
      }
    ]
  }
};

export default function Writing() {
  return (
    <Container>
      <Heading className="mb-2">Writing</Heading>
      <Text as="p" className="mb-10" colour="secondary">
        apah  apah  apah  apah  apah  apah  apah  apah  apah  apah  apah  apah  apah 
      </Text>
      <List items={allPosts} route="writing" />
      <span className="mt-12">
        <InlineLink href="/" arrowIcon hideUnderline ariaLabel="back to home page">
          Back
        </InlineLink>
      </span>
    </Container>
  );
}
