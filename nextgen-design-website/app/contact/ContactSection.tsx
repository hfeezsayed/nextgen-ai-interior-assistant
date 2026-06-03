"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch("/api/send-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Thank you! We’ll contact you shortly.");
      e.target.reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-24 bg-white">
      <ToastContainer position="bottom-right" theme="colored" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1769416233435!6m8!1m7!1sub0GMNh6beN8lgb4PxgTMg!2m2!1d19.09785374496606!2d72.89311911236759!3f67.20203079397325!4f6.246270877531899!5f0.7820865974627469"
            className="w-full h-[480px]"
            loading="lazy"
          />
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-10 shadow-lg"
        >
          <div className="mb-8 text-center">
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">
              Get in Touch
            </p>
            <h2 className="text-3xl font-semibold text-[#0E2F26]">
              Start Your Interior Journey
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              required
              placeholder="Full Name"
              className="input"
            />
            <input
              name="phone"
              required
              placeholder="Phone Number"
              className="input"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="input"
            />
            <input name="city" placeholder="City" className="input" />

            <select name="service" className="input">
              <option>Select Service</option>
              <option>Residential Interior Design</option>
              <option>Commercial Interior Design</option>
              <option>Modular Kitchen</option>
              <option>Living Room</option>
              <option>Bedroom</option>
              <option>Bathroom</option>
              <option>Furniture</option>
              <option>Electrical</option>
              <option>False Ceiling</option>
              <option>Painting</option>
              <option>Civil</option>
              <option>Plumbing</option>
              <option>Fabbrication</option>
              <option>2D Design</option>
              <option>3D Design</option>
              <option>Others</option>
            </select>

            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              className="input"
            />

            <button
              disabled={loading}
              className="w-full bg-[#0E2F26] text-white py-4 rounded-full font-medium hover:scale-[1.02] transition disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
