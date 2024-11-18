"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Типи для зображень
export interface ImageType {
  src: string;
  alt?: string;
  title?: string;
}

// Типи для пропсів компонента
interface GalleryProps {
  images: ImageType[];
  className?: string;
  autoplayDelay?: number;
}

const Gallery: React.FC<GalleryProps> = ({
  images,
  className = "",
  autoplayDelay = 5000,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div
      id="gallery"
      className={`w-full max-w-4xl mb-12 mx-auto px-4 ${className}`}
    >
      <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
        Фото служінь
      </h2>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        className="w-full rounded-lg shadow-lg overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-video">
              <Image
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                fill
                priority={index === activeSlide}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Preview */}
      <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-16 h-16 shrink-0 cursor-pointer 
              ${
                index === activeSlide
                  ? "border-2 border-blue-500"
                  : "opacity-50"
              }`}
            onClick={() => {
              swiperRef.current?.swiper.slideTo(index);
            }}
          >
            <Image
              src={image.src}
              alt={image.alt || `Thumbnail ${index + 1}`}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
