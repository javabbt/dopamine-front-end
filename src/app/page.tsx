import Hero from "@/components/Hero";
import WaitlistWidget from "@/components/WaitlistWidget";
import { getWaitlistConfig } from "@/data/waitlistConfig";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  const waitlistConfig = getWaitlistConfig();

  return (
    <>
      <div className="pt-32 pb-1 px-5">
        <div className="max-w-md mx-auto">
          <WaitlistWidget
            waitlistId={waitlistConfig.waitlistId}
            customTitle={waitlistConfig.title}
            customDescription={waitlistConfig.description}
          />
        </div>
      </div>
      <Hero />
      <div className="mt-16">
        <Logos />
      </div>
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
