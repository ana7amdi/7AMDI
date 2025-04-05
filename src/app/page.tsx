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
        <Heading className="mb-6">SALAM ANA 7AMDI</Heading>
      </AnimateEnter>
      <AnimateEnter delay={0.6}>
        <section className="mb-6 space-y-6">
<p>3NDI 16 3AM MN DAKHLA W MA3NDIX 7AYAT + MAKAN7MLX KRI WBLA MADKHL L WRITING RAH MAKANKTB WALO HHHHHGGGGGGGHSHHGHGHG.</p>
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
