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
      <Heading className="mb-6">7amdi</Heading>
      <section className="mb-6 space-y-6">
        <p>Committed to developing skill, through guiltless exploration in software and design.</p>
        <p>
          Interactivity, typography, motion, touch, optimisations, accessibility, design&mdash;an
          infinite canvas for creativity and opportunity.
        </p>
        </section>
    </Container>
  );
}
