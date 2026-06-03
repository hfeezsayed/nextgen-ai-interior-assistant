"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";
import { servicesData } from "@/data/services";
import { ServiceCategory } from "@/types/services";
import ServicesTabs from "@/components/services/ServicesTabs";
import ServicesGrid from "@/components/services/ServicesGrid";
import CTA from "@/components/common/CTA";

const categories = Object.keys(servicesData) as ServiceCategory[];

export default function ServicesPage() {
  const [active, setActive] = useState<ServiceCategory>(categories[0]);

  return (
    <main className="bg-white text-[#0b2f2a] overflow-hidden">
      {/* ================= HERO ================= */}
      <ServicesHero />

      {/* ================= CATEGORIES ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ServicesTabs
            categories={categories}
            active={active}
            onChange={setActive}
          />

          <ServicesGrid activeCategory={active} />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CTA />
    </main>
  );
}
