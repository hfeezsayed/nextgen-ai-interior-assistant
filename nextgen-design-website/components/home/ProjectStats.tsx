"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProjectStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = 100;
    const duration = 900;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 mt-24 px-6">
      {/* PREMIUM GREEN BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2f5e4e_0%,_#11221d_55%,_#070f0d_100%)]" />

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-widest text-xs text-white/70 mb-3">
            Trusted Across Mumbai
          </p>

          <h2 className="text-3xl md:text-4xl font-light text-white leading-snug mb-5">
            Trusted by Homeowners
            <br />
            Across Mumbai
          </h2>

          <p className="text-white/70 max-w-md mb-10">
            Over the years, we’ve delivered thoughtfully designed homes that
            balance aesthetics, functionality, and modern Indian living.
          </p>

          <div className="flex items-end gap-4">
            <span className="text-6xl font-semibold text-white">{count}+</span>
            <span className="text-white/70 text-sm mb-2">
              Projects Successfully Completed
            </span>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <div className="relative w-[220px] h-[220px] rounded-full bg-gradient-to-br from-[#17352c] to-[#17352c] shadow-[0_30px_80px_rgba(0,0,0,0.6)] flex items-center justify-center">
            <Image
              src="/logo_old.png"
              alt="Nextgen Design Logo"
              width={180}
              height={180}
              className="opacity-90"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
