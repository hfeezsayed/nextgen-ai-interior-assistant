"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#355f52_0%,_#1a2421_55%,_#000_100%)] backdrop-blur-sm" />

      {/* NAVBAR CONTENT */}
      <div className="relative z-10 mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/nextgen_logo.png"
            alt="Nextgen Design – Architecture & Interior Design Firm"
            width={40}
            height={40}
            priority
          />

          {/* Brand text hidden on very small screens */}
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-xs font-semibold tracking-widest text-white">
              NEXTGEN DESIGN
            </span>
            <span className="text-[10px] italic text-white/70">
              Interior & Architecture Design Firm
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-widest transition ${
                  isActive
                    ? "text-white border-b border-white/80 pb-1"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex items-center justify-center text-white"
          aria-label="Open menu"
        >
          <Bars3Icon className="h-7 w-7" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 right-0 z-50 bg-[#0f1a18] px-6 pt-6 pb-10"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest text-white/80">
                  MENU
                </span>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <XMarkIcon className="h-7 w-7 text-white" />
                </button>
              </div>

              {/* LINKS */}
              <nav className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`text-sm uppercase tracking-widest ${
                        isActive
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
