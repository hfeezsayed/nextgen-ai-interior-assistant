"use client";

import { ServiceCategory } from "@/types/services";

interface Props {
  categories: ServiceCategory[];
  active: ServiceCategory;
  onChange: (value: ServiceCategory) => void;
}

export default function ServicesTabs({ categories, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-6 py-2 rounded-full text-sm transition
          ${
            active === cat
              ? "bg-[#0b2f2a] text-white"
              : "border border-[#0b2f2a]/30 hover:bg-[#0b2f2a]/10"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
