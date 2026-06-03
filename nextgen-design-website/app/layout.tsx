import "./globals.css";
// import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingSocials from "@/components/FloatingSocials";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

//SEO
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Nextgen Design | Interior Design Company in Mumbai",
    template: "%s | Nextgen Design",
  },
  description:
    "Nextgen Design is a premium interior design company in Mumbai specializing in residential interiors, kitchen design, living & bedroom interiors, and turnkey home solutions.",
  keywords: [
    "interior design company in Mumbai",
    "interior design company in Navi Mumbai",
    "interior designer in Andheri",
    "interior designer in Ghatkopar",
    "residential interior design",
    "kitchen interior design",
    "living room interior",
    "bedroom interior design",
    "turnkey interior solutions",
  ],
  authors: [{ name: "Nextgen Design" }],
  metadataBase: new URL("https://nextgendesign.in"),

  openGraph: {
    title: "Nextgen Design | Modern Interior Design for Indian Homes",
    description:
      "Premium residential interior design services in Mumbai. Crafted for modern Indian homes.",
    url: "https://nextgendesign.in",
    siteName: "Nextgen Design",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Nextgen Design Interior Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        {/* <FloatingWhatsApp /> */}
        <FloatingSocials />
        <Footer />
      </body>
    </html>
  );
}
