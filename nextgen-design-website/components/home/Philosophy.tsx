"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="relative bg-white px-6 pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[520px] w-full overflow-hidden rounded-sm"
          >
            <Image
              src="/images/living-room-interior-mumbai.jpeg"
              alt="Modern living room interior design for Indian apartment in Mumbai"
              fill
              className="object-cover"
              priority
            />
            {/* subtle overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* RIGHT — CONTENT */}
          <div>
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-xs uppercase tracking-[0.35em] text-brand-accent"
            >
              Our Approach
            </motion.p>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8 text-3xl font-medium leading-tight tracking-wide text-brand-dark sm:text-4xl"
            >
              Design Rooted in Purpose,
              <br />
              Crafted with Intent.
            </motion.h2>

            {/* Text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mb-6 text-base leading-relaxed text-brand-dark/80"
            >
              We believe great design goes beyond aesthetics. It is about
              understanding context, respecting materials, and creating spaces
              that feel timeless and intuitive.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-10 text-base leading-relaxed text-brand-dark/80"
            >
              Our process blends architecture and interiors into a single,
              coherent vision — where every detail is intentional, functional,
              and quietly expressive.
            </motion.p>

            {/* Philosophy Points */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-5"
            >
              {[
                "Context Driven Design",
                "Detail Oriented Process",
                "Timeless Aesthetics",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 text-sm uppercase tracking-wider text-brand-dark"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-accent/40">
                    <Check className="h-4 w-4 text-brand-accent" />
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
