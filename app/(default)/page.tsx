export const metadata = {
  title: "Premier Infra Group",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/cta";
import Operations from "@/components/operations/operations";
import StatsSection from "@/components/StatsSection";
import TitleVideo from "@/components/title-video";
import Operations1 from "@/components/operations/operations_1";


export default function Home() {
  return (
    <>
      <TitleVideo />
      <PageIllustration />
      <Hero />
      <StatsSection />
      <Workflows />
      <Features />
      <Testimonials />
      <Operations />
      <Operations1 /> 
      <Contact />
    </>
  );
}
