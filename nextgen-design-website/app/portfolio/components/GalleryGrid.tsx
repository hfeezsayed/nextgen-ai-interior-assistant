import Image from "next/image";
import MotionWrapper from "@/components/common/MotionWrapper";

export default function GalleryGrid({
  images,
  openModal,
}: {
  images: string[];
  openModal: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {images.map((img, index) => (
        <MotionWrapper key={index} delay={index * 0.05}>
          <div
            onClick={() => openModal(index)}
            className="relative w-full aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group"
          >
            <Image
              src={img}
              alt="Interior Design Project"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </MotionWrapper>
      ))}
    </div>
  );
}
