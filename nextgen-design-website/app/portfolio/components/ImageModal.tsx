"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageModal({ images, index, setIndex, close }: any) {
  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Close */}
        <button onClick={close} className="absolute top-5 right-5 text-white">
          <X size={30} />
        </button>

        {/* Prev */}
        <button onClick={prev} className="absolute left-5 text-white">
          <ChevronLeft size={40} />
        </button>

        {/* Image */}
        <motion.div
          key={index}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-[90vw] max-w-5xl h-[80vh]"
        >
          <Image
            src={images[index]}
            alt="Project Image"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Next */}
        <button onClick={next} className="absolute right-5 text-white">
          <ChevronRight size={40} />
        </button>

        {/* Thumbnails */}
        <div className="absolute bottom-6 flex gap-2 overflow-x-auto max-w-[90vw]">
          {images.map((img: string, i: number) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`relative w-20 h-14 cursor-pointer rounded overflow-hidden ${
                index === i ? "ring-2 ring-white" : ""
              }`}
            >
              <Image src={img} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
