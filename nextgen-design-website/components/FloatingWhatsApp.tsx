"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function FloatingWhatsApp() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [idle, setIdle] = useState(false);

  // Scroll based fade-in
  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [isInView, controls]);

  // Idle pulse after 5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setIdle(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.a
      ref={ref}
      href="https://wa.me/919867877061"
      target="_blank"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      whileHover={{ scale: 1.12 }}
      transition={{ duration: 0.4 }}
      className="
        fixed 
        right-6 
        bottom-[10%] 
        z-50
        group
      "
    >
      {/* Pulse Ring */}
      {idle && (
        <span className="absolute inset-0 rounded-full bg-[#1f3d34]/40 animate-ping" />
      )}

      {/* Button */}
      <div
        className="
          relative
          bg-[#1f3d34]
          text-white
          p-4
          rounded-full
          shadow-xl
        "
      >
        <MessageCircle size={24} />
      </div>

      {/* Tooltip */}
      <span
        className="
          absolute
          right-full
          mr-3
          top-1/2
          -translate-y-1/2
          whitespace-nowrap
          rounded-md
          bg-[#1f3d34]
          px-3
          py-1
          text-xs
          text-white
          opacity-0
          translate-x-2
          group-hover:opacity-100
          group-hover:translate-x-0
          transition
        "
      >
        Chat with us
      </span>
    </motion.a>
  );
}
