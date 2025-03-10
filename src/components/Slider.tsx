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
  title: string,
  ageGroup: string,
  desc: string,
  likes_star: string,
  likes_num: string
};

interface SliderProps {
  items: SlideItem[];
}

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   style: ["normal", "italic"],
// });

// const permanentMarker = Permanent_Marker({
//   subsets: ["latin"],
//   weight: "400",
// });

const Slider = ({ items }: SliderProps) => {


  const { itemsPerSlide, setItemsPerSlide, autoPlayInterval } = useSliderStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(items.length / itemsPerSlide);
  const [slides, setSlides] = useState<SlideItem[][]>([]); // Corrected type
  const [limit, setLimit] = useState<number>(3);
  const preBbuttonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const limitButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        if (nextButtonRef.current) {
          nextButtonRef.current.focus();
        }
      } else if (event.key === "ArrowUp") {
        if (preBbuttonRef.current) {
          preBbuttonRef.current.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoPlayInterval || 3000);

    return () => clearInterval(intervalId);
  }, [autoPlayInterval, totalSlides]);

  useEffect(() => {
    const totalSlides = Math.ceil(items.length / itemsPerSlide);
    const newSlides = Array.from({ length: totalSlides }, (_, slideIndex) => {
      const startIndex = slideIndex * itemsPerSlide;
      return items.slice(startIndex, startIndex + itemsPerSlide);
    });
    setSlides(newSlides); // Correctly typed as SlideItem[][]
    setCurrentIndex(0);
  }, [items, itemsPerSlide]);

  useEffect(() => {
    setItemsPerSlide(parseInt(limit.toString()));
    setCurrentIndex(0);
  }, [limit]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(parseInt(e.target.value));
  };

  const handleReset = () => {
    setItemsPerSlide(3);
    setCurrentIndex(0);
  };

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

  return (
    <>

<div className="flex justify-end gap-[18px] pb-[11px] px-14 ">

<button
        onClick={prevSlide}
        ref={preBbuttonRef}
        className="px-4 py-[12px] rounded-2xl border border-[#0953E9]"

        // className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        <Image src={Letarrow } />
        {/* <i className="ri-arrow-left-s-line text-2xl text-black"></i> */}
      </button>
      <button
        onClick={nextSlide}
        ref={nextButtonRef}
        className="px-4 py-[12px] rounded-2xl border border-[#0953E9]"

        // className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        <Image src={Rightarrow} />
        {/* <i className="ri-arrow-right-s-line text-2xl text-black"></i> */}
      </button>

</div>

    <div className="relative w-full max-w-8xl mx-auto overflow-hidden">


      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slideItems, slideIndex) => (
          <div key={slideIndex} className="flex flex-wrap w-full shrink-0">
            {slideItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-center p-4
                     ${
                  itemsPerSlide === 8
                    ? "w-1/2 md:w-1/4"
                    : itemsPerSlide === 1
                    ? "w-full"
                    : itemsPerSlide === 2
                    ? "w-1/2"
                    : "w-1/3"
                }
                `}
              >
                <div className="bg-gray-200 text-black rounded-xl px-0 shadow ">
                  <div className="h-56 bg-transparent flex justify-center items-center">
                    <img src={item.src} alt={item.alt} className="h-full w-full rounded-3xl p-4" />
                  </div>
                  <div className="flex flex-col items-start justify-start p-4">
                    <p className={`text-xl font-semibold `}>
                      - {item.name}
                    </p>
                    <p className="text-start">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

     

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? "bg-black" : "bg-white border border-[#1259E9]"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

    </div>
    </>
  );
};

export default Slider;