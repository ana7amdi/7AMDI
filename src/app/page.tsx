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
        <Heading className="mb-6">7amdi</Heading>
      </AnimateEnter>
      <AnimateEnter delay={0.6}>
        <section className="mb-6 space-y-6">
          <p>
            #

Salam ana 7 amdi wla 7 madi wla mohamed wkay3to 3 liya chi w7din ra chel7 t9ol ana b7di li chl7 hhhhhggggggghshhghghg

Idk mnin jbti lien walakin aji n3awdlkk

Ana 7 amdi 3n di 16 3 am mn dakhla tzadit fswira(ah ana chel7 hhhhhggggggghshhghghg)

Mhm ma3ndi maydar fhad l7ayat ra 3 aych w makan7mlx kri matswlnixh 3 lah

7 yati kolha l97ba mha m7wiya w aghlb la9t dyali ya kann3s ya kanl3b brawl stars hhhhhggggggghshhghghg

Aghlb lw9t dyali kandwzo f Instagram 7 it ma3ndix 7 ayat

Safi 3 yit mn lktaba bn8.
          </p>
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
