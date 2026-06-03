"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import PortfolioTabs from "./components/PortfolioTabs";
import GalleryGrid from "./components/GalleryGrid";
import ImageModal from "./components/ImageModal";

export default function PortfolioPage() {
  const [mainTab, setMainTab] = useState("interior");
  const [subTab, setSubTab] = useState("residential");
  const [activeLocation, setActiveLocation] = useState("all");

  const [modalImages, setModalImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  const data =
    portfolioData[mainTab as keyof typeof portfolioData][
      subTab as keyof typeof portfolioData.interior
    ];

  const locations = Array.from(new Set(data.map((item) => item.location)));

  const filteredData =
    activeLocation === "all"
      ? data
      : data.filter((d) => d.location === activeLocation);

  return (
    <>
      <section className="py-24 max-w-7xl mx-auto px-4 space-y-16">
        <h1 className="text-4xl font-semibold text-center mb-10 mt-8">
          Portfolio
        </h1>

        {/* STICKY TABS WRAPPER */}
        <div className="sticky top-[88px] z-40">
          <PortfolioTabs
            mainTab={mainTab}
            setMainTab={setMainTab}
            subTab={subTab}
            setSubTab={setSubTab}
            locations={locations}
            activeLocation={activeLocation}
            setActiveLocation={setActiveLocation}
          />
        </div>

        {filteredData.map((project) => (
          <div key={project.id} className="mt-12">
            <h2 className="text-lg font-medium text-center mb-6">
              {project.location}
            </h2>

            <GalleryGrid
              images={project.images}
              openModal={(i) => {
                setModalImages(project.images);
                setIndex(i);
              }}
            />
          </div>
        ))}
      </section>

      {modalImages.length > 0 && (
        <ImageModal
          images={modalImages}
          index={index}
          setIndex={setIndex}
          close={() => setModalImages([])}
        />
      )}
    </>
  );
}
