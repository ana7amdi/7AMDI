import Container from '@/app/components/generic/Container';
import Heading from '@/app/components/generic/Heading';
import InlineLink from '@/app/components/ui/InlineLink';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '@6e6pi',
  description: 'salam ana 7amdi (@6e6pi)',
  openGraph: {
    title: '@6e6pi',
    description: 'salam ana 7amdi(@6e6pi)'
  },
  twitter: {
    title: '6e6pi',
    site: '@7amdi911',
    card: 'summary',
    description: 'salam ana 7amdi',
    images: [
      {
        url: 'https://ana7amdi.vercel.app/og.jpeg',
        height: 1200,
        width: 1200
      }
    ]
  }
};

export default function Now() {
  return (
    <Container>
      <Heading className="mb-6">Salam ana @6e6pi</Heading>
      <section className="mb-6 space-y-6">
        <p>ana 7amdi</p>
<p>W 100% jiti mn @6e6pi</p>
<p>Jiti mn laccount li kan7awel nkon fih social</p>
 <p>Wakha ma9dirch ms ba9i kan7awl ndir s7ab yk</p>
        <p>
          Wsf mab9a fiya li yktb
        </p>
        </section>
              <span className="mt-12">
        <InlineLink href="/" arrowIcon hideUnderline ariaLabel="back to home page">
          Back
        </InlineLink>
      </span>
    </Container>
  );
}
