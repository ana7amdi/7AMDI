import Container from '@/app/components/generic/Container';
import Heading from '@/app/components/generic/Heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '7amdi',
  description: 'salam ana 7amdi',
  openGraph: {
    title: '7amdi',
    description: 'salam ana 7amdi'
  },
  twitter: {
    title: '7amdi',
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
        <p>ana 7amdi
W 100% jiti mn @6e6pi
Jiti mn laccount li kan7awel nkon fih social
Wakha ma9dirch ms ba9i kan7awl ndir s7ab yk</p>
        <p>
          Wsf mab9a fiya li yktb
        </p>
        </section>
    </Container>
  );
}
