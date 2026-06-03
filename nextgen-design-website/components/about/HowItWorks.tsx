"use client";

import { motion } from "framer-motion";
import {
  UserIcon,
  PencilSquareIcon,
  PlayCircleIcon,
  CheckCircleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Meet the Designer",
    icon: UserIcon,
  },
  {
    title: "Design & Planning",
    icon: PencilSquareIcon,
  },
  {
    title: "Execution Begins",
    icon: PlayCircleIcon,
  },
  {
    title: "Final Installation",
    icon: CheckCircleIcon,
  },
  {
    title: "Move In & Enjoy",
    icon: HomeIcon,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center mb-6"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-20"
        >
          A seamless interior journey — from first consultation to final
          handover, designed for clarity and peace of mind.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px border-t border-dashed border-gray-300" />

          <div className="grid gap-12 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Circle */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[rgba(14,47,38,0.08)] mb-6 z-10">
                    <Icon className="w-7 h-7 text-[#0E2F26]" />
                  </div>

                  {/* Title */}
                  <p className="text-gray-800 font-medium max-w-[140px]">
                    {step.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <a
            href="/contact"
            className="px-8 py-3 rounded-full bg-[#0E2F26] text-white text-sm hover:opacity-90 transition"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
