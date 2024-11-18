import Container from '@/app/components/generic/Container';
import { Metadata } from 'next';
import InlineLink from './components/ui/InlineLink';

export const metadata: Metadata = {
  title: '404',
  description: 'Not found.',
  openGraph: {
    title: '404',
    description: 'Not found.'
  },
  twitter: {
    title: '404',
    site: '@7amdi911',
    card: 'summary',
    description: 'Not found.'
  }
};

export default function NotFound() {
  return (
    <Container>
      <h1 className="mb-6 text-lg font-medium">404 &mdash; Not Found</h1>
      <section>
        <p className="mb-6">
          w3333333 ydk fih
        </p>
        <p>lmra jaya y9dr tsd9 ama daba la hhhhhhhhh.</p>
      </section>
      <span className="mt-6">
        <InlineLink href="/" ariaLabel="go to home page" arrowIcon className="p-1" hideUnderline>
          Back
        </InlineLink>
      </span>
    </Container>
  );
}
