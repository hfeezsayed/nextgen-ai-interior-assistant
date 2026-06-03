"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed
          bottom-[8%]
          right-6
          z-50
          rounded-full
          bg-[#1f3d34]
          p-4
          text-white
          shadow-xl
          hover:scale-105
          transition
        "
      >
        <MessageCircle size={24} />
      </button>

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="
              fixed
              bottom-4
              right-6
              z-50
              w-[360px]
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#111]
              shadow-2xl
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#1f3d34] px-4 py-3 text-white">
              <div>
                <h3 className="font-semibold">NextGen AI Assistant</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>

              <button onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[320px] overflow-y-auto p-4 space-y-3">
              <div className="max-w-[80%] rounded-xl bg-white/10 p-3 text-sm text-white">
                Hi! How may I assist you?
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-3">
              <div className="flex gap-2">
                <input
                  placeholder="Type your message..."
                  className="
                    flex-1
                    rounded-xl
                    border
                    border-white/10
                    bg-[#1a1a1a]
                    px-3
                    py-2
                    text-sm
                    text-white
                    outline-none
                  "
                />

                <button
                  className="
                    rounded-xl
                    bg-[#1f3d34]
                    px-4
                    text-white
                  "
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
