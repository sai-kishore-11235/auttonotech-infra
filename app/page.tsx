import { Marquee, Sectors, Services } from "@/components/capabilities";
import { CtaBand, Leadership, Pipeline, Why } from "@/components/company";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <Sectors />
      <Services />
      <Why />
      <Pipeline />
      <Leadership />
      <CtaBand />
      <Contact />
      <Footer />
    </>
  );
}
