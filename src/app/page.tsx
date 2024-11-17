import AnimateEnter from '@/app/components/generic/AnimateEnter';
import Container from '@/app/components/generic/Container';
import Heading from '@/app/components/generic/Heading';
import Separator from '@/app/components/generic/Separator';
import Contact from '@/app/components/ui/Contact';
import InlineLink from '@/app/components/ui/InlineLink';
import TimeWidget from '@/app/components/ui/TimeWidget';
import { pages } from './constants/constants';

export default function Home() {
  return (
    <Container>
      <AnimateEnter delay={0.4}>
        <Heading className="mb-6">HELLO I'm 7amdi</Heading>
      </AnimateEnter>
      <AnimateEnter delay={0.6}>
        <section className="mb-6 space-y-6">
<p>I'm 16yo I don't have much to do in life. I'm bored and tired. Don't ask me about my life, it's a mess. I mostly sleep or play Brawl Stars. I spend most of my time on Instagram cause\ I have no life.</p>
        </section>
      </AnimateEnter>
      <AnimateEnter delay={0.8}>
        <nav className="space-x-2">
          {pages.map(({ name, href, ariaLabel }) => (
            <span key={name}>
              <InlineLink href={href} ariaLabel={ariaLabel}>
                {name}
              </InlineLink>
            </span>
          ))}
        </nav>
        <Separator className="my-12" />
      </AnimateEnter>
      <AnimateEnter delay={1}>
        <Contact />
      </AnimateEnter>
      <AnimateEnter delay={1.2}>
        <TimeWidget />
      </AnimateEnter>
    </Container>
  );
}
