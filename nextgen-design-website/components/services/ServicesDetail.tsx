"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import services from "@/data/servicesDetail.json";

export default function ServicesDetail() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-16 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-lg">
                {service.description}
              </p>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={700}
                height={500}
                className="object-cover w-full h-full"
              />
              {/* Subtle brand overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#14352b]/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
