"use client";

import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Layers,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-14"
      >
        {/* BRAND */}
        <motion.div variants={item}>
          <h3 className="text-xl font-semibold tracking-wide">
            NEXTGEN DESIGN
          </h3>
          <p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-sm">
            Architecture & Interior Design firm crafting modern Indian homes
            with clarity, purpose, and timeless aesthetics.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div variants={item}>
          <h4 className="text-sm font-semibold tracking-widest uppercase mb-6">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm">
            {[
              { label: "Home", icon: Home },
              { label: "Portfolio", icon: Layers },
              { label: "Services", icon: Briefcase },
              { label: "Contact", icon: Phone },
            ].map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-neutral-700 hover:text-emerald-700 transition cursor-pointer"
              >
                <Icon className="w-4 h-4 text-emerald-700" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div variants={item}>
          <h4 className="text-sm font-semibold tracking-widest uppercase mb-6">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-neutral-700">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-emerald-700 mt-1" />
              Mumbai
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-700" />
              WhatsApp: +91 9867877061 / 98923 44393
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-emerald-700" />
              nextgeninarch@gmail.com
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* BOTTOM BAR */}
      <div className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
          <span>© 2026 Nextgen Design. All rights reserved.</span>
          <span className="mt-3 md:mt-0 italic">
            Developed By{" "}
            <span className="text-emerald-700 font-medium">Hafeez Ali</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
