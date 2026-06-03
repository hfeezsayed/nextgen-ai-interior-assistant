"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  sender: "user" | "assistant";
  text: string;
}

export default function ChatWidget() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

  const userId = useRef("user_" + Math.random().toString(36).substring(2, 10));

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [chatDisabled, setChatDisabled] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      text: "Hi! How may I assist you?",
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const sendMessage = async () => {
    const message = input.trim();

    if (!message) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
    ]);

    setInput("");
    setTyping(true);

    try {
      const response = await fetch(
        `${API_URL}/chat?message=${encodeURIComponent(
          message,
        )}&user_id=${userId.current}`,
      );

      const data = await response.json();

      const botReply = data.response || "Sorry, I couldn't process that.";

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          text: botReply,
        },
      ]);

      if (botReply.includes("Our team will contact you shortly")) {
        setTimeout(() => {
          setChatDisabled(true);
        }, 10000);

        setTimeout(() => {
          setOpen(false);
        }, 20000);
      }
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          text: "Unable to connect. Please try again later.",
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

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
              </div>

              <button onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[320px] overflow-y-auto p-4 space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl p-3 text-sm ${
                      msg.sender === "user"
                        ? "bg-[#1f3d34] text-white"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-xl bg-white/10 p-3 text-sm text-white">
                    Assistant is typing...
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-3">
              <div className="flex gap-2">
                <input
                  value={input}
                  disabled={chatDisabled}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    chatDisabled
                      ? "Conversation completed"
                      : "Type your message..."
                  }
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
                  disabled={chatDisabled}
                  onClick={sendMessage}
                  className={`
                    rounded-xl
                    bg-[#1f3d34]
                    px-4
                    text-white
                    hover:opacity-90
                    ${chatDisabled ? "opacity-50 cursor-not-allowed" : ""}
                `}
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
