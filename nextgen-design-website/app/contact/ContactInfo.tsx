"use client";

import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <section className="bg-gray-50 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">
            Reach Us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0E2F26]">
            Get in Touch With Nextgen Design
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* LOCATION */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <h3 className="font-semibold text-lg text-[#0E2F26] mb-2">
              Our Location
            </h3>
            <p className="text-gray-600">
              Shop No.3, Above Janhit Medical Store, Dhanlaxmi Lane, Andheri -
              Ghatkopar Link Road, Near Aslpha Metro, Station,Aslpha Village,
              Mumbai, Maharashtra 400072
            </p>
          </div>

          {/* PHONE */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <h3 className="font-semibold text-lg text-[#0E2F26] mb-2">
              Call Us
            </h3>
            <p className="text-gray-600">+91 9867877061</p>
            <p className="text-gray-600">+91 9892344393</p>
            <p className="text-gray-600">+91 8928168938</p>
          </div>

          {/* EMAIL */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <h3 className="font-semibold text-lg text-[#0E2F26] mb-2">
              Email Us
            </h3>
            <p className="text-gray-600">nextgeninarch@gmail.com</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
