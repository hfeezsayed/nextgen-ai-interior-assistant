"use client";

import { servicesData } from "@/data/services";
import { ServiceCategory } from "@/types/services";
import ServiceCard from "./ServiceCard";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  activeCategory: ServiceCategory;
}

export default function ServicesGrid({ activeCategory }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeCategory} // 🔑 IMPORTANT: category-based re-render
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {servicesData[activeCategory].map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
