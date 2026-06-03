import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Nextgen Design – Interior Design Projects Mumbai",
  description:
    "Explore Nextgen Design’s interior design portfolio featuring modern Indian homes, modular kitchens, living rooms, and bespoke interiors across Mumbai.",
  keywords: [
    "Interior Design Portfolio Mumbai",
    "Modular Kitchen Design",
    "Living Room Interior",
    "Bedroom Interior Design",
    "Nextgen Design Projects",
  ],
  openGraph: {
    title: "Nextgen Design Portfolio",
    description:
      "Timeless interior design projects crafted for modern Indian homes.",
    url: "https://nextgendesign.in/portfolio",
    siteName: "Nextgen Design",
    images: [
      {
        url: "/portfolio/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Nextgen Design Portfolio",
      },
    ],
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
