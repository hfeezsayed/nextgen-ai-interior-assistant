import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ProjectStats from "@/components/home/ProjectStats";
import ServicesMosaic from "@/components/services/ServicesMosaic";
import Testimonials from "@/components/testimonials/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import CTA from "@/components/common/CTA";
import ChatWidget from "@/components/ChatWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Company in Mumbai | Nextgen Design",
  description:
    "Looking for an interior design company in Mumbai? Nextgen Design specializes in residential interiors, kitchen design, living & bedroom interiors, and turnkey home solutions.",
  alternates: {
    canonical: "https://www.nextgendesign.in/",
  },
  openGraph: {
    title: "Nextgen Design | Interior Design Company in Mumbai",
    description:
      "Premium residential interior design services in Mumbai for modern Indian homes.",
    url: "https://www.nextgendesign.in/",
    siteName: "Nextgen Design",
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InteriorDesignBusiness",
            name: "Nextgen Design",
            url: "https://www.nextgendesign.in",
            areaServed: [
              "Mumbai",
              "Andheri",
              "Ghatkopar",
              "Thane",
              "Navi Mumbai",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressRegion: "MH",
              addressCountry: "IN",
            },
            sameAs: [
              "https://www.instagram.com/nextgendesign",
              "https://www.facebook.com/nextgendesign",
            ],
          }),
        }}
      />

      <Hero />
      <Philosophy />
      <FeaturedProjects />
      <ProjectStats />
      <ServicesMosaic />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <ChatWidget />
    </>
  );
}
