import React from "react";
import Image from "next/image";
import karolina from "../assets/images/pexels-karolina-grabowska-8005452 1.png";
import RightIcon from "../assets/images/RightIcon.png";

type Props = {
  title: string;
  icon: string;
  description: string;
};

interface achimentProps {
  items: Props[];
}

const Achivements = ({ items }: achimentProps) => {
  return (
      <div className="flex  justify-between px-[65px] py-[30px] items-center text-start">
        <div className="relative w-[557px] h-[515px] px-12">
          <div className="absolute w-[386px] h-[386px] bg-[#d7dfef] top-[130px] left-[1px] rounded-3xl "></div>
          <Image
            className="absolute  w-[490px] h-[497px] top-[20px] left-[1px] rounded-3xl"
            src={karolina}
            alt="Lesson"
          />
        </div>

        <div className="flex flex-col gap-[21px] w-1/2  max-w-xl">
          <h2 className="text-[36px] font-semibold leading-[160%] mb-[8px]">
            <span className="text-[#393939]">What Will You</span>{" "}
            <span className="text-blue-600">Get</span>
            <span className="text-[#393939]">?</span>
          </h2>

          {items.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4  shadow-[0px_-2px_128px_rgba(0,59,179,0.14)] flex gap-4 items-start"
            >
              <Image
                src={RightIcon}
                alt="Tick"
                width={52}
                height={52}
                className="flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-[16px] text-gray-custom">
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
