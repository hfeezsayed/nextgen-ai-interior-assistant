"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="relative aspect-square rounded-[48px] overflow-hidden shadow-xl">
              <Image
                src="/images/about/who-we-are-nextgendesign.jpeg"
                alt="Interior design illustration representing Nextgen Design"
                fill
                className="object-contain"
                priority={false}
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Section Label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="block text-xs tracking-[0.35em] uppercase text-gray-500 mb-6"
            >
              Who We Are
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold mb-8 leading-tight"
            >
              Designing Homes That Reflect Your Lifestyle
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed mb-6"
            >
              Nextgen Design is a Mumbai-based interior design and architecture
              studio focused on creating thoughtful, functional, and visually
              balanced spaces. We believe great design goes beyond aesthetics—it
              should enhance the way you live, work, and feel every day.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed"
            >
              With over <strong>13+ years of industry experience</strong>, we
              have delivered customized residential and commercial interiors
              that reflect our clients’ lifestyle, values, and aspirations. Our
              work combines creative vision with practical execution.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
