"use client";

import { motion } from "framer-motion";
import { CheckCircle, Layers, ShieldCheck, Home } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Design-Led Thinking",
    desc: "Every space begins with lifestyle understanding — not templates.",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Execution",
    desc: "From concept to final handover, we manage everything seamlessly.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency & Trust",
    desc: "Clear timelines, honest pricing, and zero hidden surprises.",
  },
  {
    icon: Home,
    title: "Indian Home Expertise",
    desc: "Deep experience with Indian apartments, villas, and compact living.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white pt-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs tracking-[0.3em] text-neutral-500">
            WHY NEXTGEN DESIGN
          </p>
          <h2 className="text-3xl font-light tracking-wide text-neutral-900 md:text-4xl">
            Designed for Modern Indian Homes
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -12 }}
                className="group relative rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-transparent hover:bg-[#1f3a33]"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#1f3a33]/10 transition-colors duration-300 group-hover:bg-white/10">
                  <Icon className="h-6 w-6 text-[#1f3a33] transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-medium text-neutral-900 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-neutral-200">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
