"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-[#0b2f2a] to-[#071e1b]
        pt-20 md:pt-28
        min-h-[calc(100vh-4rem)] md:min-h-[90vh]
        flex items-center
      "
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="
            flex flex-col-reverse md:grid md:grid-cols-2
            items-center
            gap-12 md:gap-16
          "
        >
          {/* ================= LEFT TEXT ================= */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="
              flex flex-col justify-center
              text-center md:text-left
            "
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="
                text-xs sm:text-sm
                tracking-widest
                text-green-300
                mb-4
              "
            >
              OUR SERVICES
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="
                text-3xl sm:text-4xl md:text-5xl
                font-light text-white
                leading-tight
                mb-6
                max-w-xl
                mx-auto md:mx-0
              "
            >
              Designing Spaces That Elevate Everyday Living
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="
                text-sm sm:text-base md:text-lg
                text-gray-300
                max-w-lg
                mx-auto md:mx-0
                pb-6
              "
            >
              Premium interior and architectural solutions thoughtfully crafted
              for modern Indian homes and commercial spaces.
            </motion.p>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="
              relative flex items-center justify-center
              w-full
            "
          >
            {/* Ambient glow */}
            <div className="absolute w-[70%] h-[70%] bg-green-400/20 blur-3xl rounded-full" />

            {/* Image */}
            <div className="relative w-full max-w-[420px] md:max-w-[520px] pb-4">
              <Image
                src="/images/services_hero.gif"
                alt="Architectural Design Services"
                width={520}
                height={520}
                priority
                className="object-contain w-full h-auto rounded-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
