import React from "react";
import Image from "next/image";
import karolina from "../assets/images/pexels-karolina-grabowska-8005452 1.png";
import RightIcon from "../assets/images/RightIcon.png";

type Props = {
  title: string;
  icon: string;
  description: string;
};

interface achivementProps {
  items: Props[];
}

const Achivements = ({ items }: achivementProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-start px-6 md:px-16 py-10">
      {/* Left Side (Image) */}

      <div className="relative w-full max-w-lg md:w-1/2 px-6 hidden md:block">
        <div className="absolute w-[70%] h-[70%] bg-[#d7dfef] top-24 left-0 rounded-3xl"></div>
        <Image
          className="relative w-full h-auto rounded-3xl"
          src={karolina}
          alt="Lesson"
        />
      </div>

      {/* Right Side (Text & Benefits) */}
      <div className="flex flex-col gap-6 w-full md:w-1/2 max-w-xl mt-10 md:mt-0">
        <h2 className="text-[28px] md:text-[36px] font-semibold leading-[160%]">
          <span className="text-[#393939]">What Will You</span>{" "}
          <span className="text-blue-600">Get</span>
          <span className="text-[#393939]">?</span>
        </h2>

        {items.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-lg flex gap-4 items-start"
          >
            <Image
              src={RightIcon}
              alt="Tick"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-semibold text-[16px] text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achivements;
