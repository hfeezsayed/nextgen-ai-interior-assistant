"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { ServiceItem } from "@/types/services";

interface Props {
  service: ServiceItem;
}

export default function ServiceCard({ service }: Props) {
  return (
    <motion.div
      layout // 👈 allows smooth layout changes
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition"
    >
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-medium text-[#0b2f2a] mb-2">
          {service.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {service.description}
        </p>

        <a
          href="https://wa.me/919867877061"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0b2f2a] hover:underline"
        >
          <WhatsAppIcon className="w-5 h-5 text-green-600" />
          WhatsApp Enquiry
        </a>
      </div>
    </motion.div>
  );
}
