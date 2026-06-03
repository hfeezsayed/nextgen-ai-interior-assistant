"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import services from "@/data/services.json";

export default function ServicesMosaic() {
  return (
    <section className="pt-28 bg-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20, letterSpacing: "0.15em" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.4em] text-gray-600 uppercase text-center mb-14"
        >
          100% Customized Interiors by Professionals
        </motion.p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-xl ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            {/* Image */}
            <Image
              src={service.image}
              alt={service.title}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1f1a]/90 via-[#14352b]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Text */}
            <div className="absolute inset-0 flex items-end p-8">
              <h3 className="text-white text-3xl font-semibold tracking-wide">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
