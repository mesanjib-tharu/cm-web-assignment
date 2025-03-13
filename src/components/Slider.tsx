"use client";

import { useEffect, useState, useRef } from "react";
import useSliderStore from "../app/store/sliderStore";
import Letarrow from "../assets/images/Left_Arrow.png";
import Rightarrow from "../assets/images/Right_Arrow.png";
import Image from "next/image";

type SlideItem = {
  name: string;
  src: string;
  alt: string;
  title: string;
  ageGroup: string;
  desc: string;
  likes_star: string;
  likes_num: string;
};

interface SliderProps {
  items: SlideItem[];
}

const Slider = ({ items }: SliderProps) => {
  const { itemsPerSlide, setItemsPerSlide, autoPlayInterval } = useSliderStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState<SlideItem[][]>([]);
  const [limit, setLimit] = useState<number>(3);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(limit);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, [limit]);

  useEffect(() => {
    const totalSlides = Math.ceil(items.length / itemsPerSlide);
    const newSlides = Array.from({ length: totalSlides }, (_, slideIndex) => {
      const startIndex = slideIndex * itemsPerSlide;
      return items.slice(startIndex, startIndex + itemsPerSlide);
    });

    setSlides(newSlides);
    setCurrentIndex(0);
  }, [items, itemsPerSlide]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoPlayInterval || 3000);

    return () => clearInterval(intervalId);
  }, [autoPlayInterval, slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative max-w-8xl mx-auto overflow-hidden">
      <div className="flex justify-end gap-4 pb-4 px-6">
        <button
          onClick={prevSlide}
          ref={prevButtonRef}
          className="px-4 py-2 rounded-2xl border border-[#0953E9] bg-white shadow-md"
          aria-label="Previous Slide"
        >
          <Image src={Letarrow} alt="Previous" width={24} height={24} />
        </button>
        <button
          onClick={nextSlide}
          ref={nextButtonRef}
          className="px-4 py-2 rounded-2xl border border-[#0953E9] bg-white shadow-md"
          aria-label="Next Slide"
        >
          <Image src={Rightarrow} alt="Next" width={24} height={24} />
        </button>
      </div>

      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slideItems, slideIndex) => (
          <div key={slideIndex} className="flex flex-wrap w-full shrink-0">
            {slideItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-center p-4 ${
                  itemsPerSlide === 8
                    ? "w-1/2 md:w-1/4"
                    : itemsPerSlide === 1
                    ? "w-full"
                    : itemsPerSlide === 2
                    ? "w-1/2"
                    : "w-1/3"
                }`}
              >
                <div className="bg-gray-200 text-black rounded-xl px-0 shadow-lg w-full">
                  <div className="h-56 bg-transparent flex justify-center items-center">
                    <Image src={item.src} alt={item.alt} width={300} height={200} className="h-full w-full object-cover rounded-3xl p-4" />
                  </div>
                  <div className="flex flex-col items-start justify-start p-4">
                    <p className="text-xl font-semibold">{item.name}</p>
                    <p className="text-start text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: slides.length }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-white border border-[#1259E9]"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
