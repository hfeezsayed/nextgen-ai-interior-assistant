import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurExperties from "@/components/about/OurExperties";
import HowItWorks from "@/components/about/HowItWorks";
import CTA from "@/components/common/CTA";

export const metadata = {
  title: "About Nextgen Design | Interior Design Company in Mumbai",
  description:
    "Learn about Nextgen Design, a trusted interior design company in Mumbai specializing in residential interiors, kitchens, and turnkey home solutions.",
  keywords: [
    "interior designer in Mumbai",
    "interior design company Andheri",
    "home interior designers Ghatkopar",
    "residential interior design Mumbai",
    "kitchen interior design Mumbai",
  ],
  alternates: {
    canonical: "https://nextgendesign.in/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <OurExperties />
      <HowItWorks />
      <CTA />
    </>
  );
}
