"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube } from "lucide-react";

const socials = [
  {
    icon: <Facebook size={18} />,
    link: "https://www.facebook.com/profile.php?id=100093490312681",
  },
  {
    icon: <Instagram size={18} />,
    link: "https://www.instagram.com/nextgeninarch061/",
  },
  {
    icon: <Youtube size={18} />,
    link: "https://www.youtube.com/@NextgenInteriorDesign",
  },
];

export default function FloatingSocials() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 space-y-3">
      {socials.map((item, i) => (
        <motion.a
          key={i}
          href={item.link}
          target="_blank"
          initial={{ x: 0 }}
          whileHover={{ x: -8 }}
          transition={{ duration: 0.25 }}
          className="
            w-10
            h-10
            flex
            items-center
            justify-center
            rounded-full
            bg-[#1f3d34]
            text-white
            shadow-lg
            hover:bg-[#264b40]
          "
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}
