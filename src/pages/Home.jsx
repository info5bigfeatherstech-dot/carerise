import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Programs from "../components/home/Programs";
import Stats from "../components/home/Stats";
import AdoptSection from "../components/home/AdoptSection";
import Campaigns from "../components/home/Campaigns";
import HowYouCanHelp from "../components/home/HowYouCanHelp";
import Testimonials from "../components/home/Testimonials";
import Faq from "../components/home/Faq";
import CtaBanner from "../components/home/CtaBanner";

/** Composes the only implemented destination: the CareRise home page. */
export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Programs />
      <Stats />
      <AdoptSection />
      <Campaigns />
      <HowYouCanHelp />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </main>
  );
}
