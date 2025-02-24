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


export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <StatsSection />
      <Workflows />
      <Features />
      <Testimonials />
      <Operations />
      <Contact />
    </>
  );
}
