import React from "react";
import Image from "next/image";
import Microservice from "../assets/images/pexels-tima-miroshnichenko-6914646 1.png";
import shield from "../assets/images/Shield-Done.png";
import doc from "../assets/images/Document.png";
import heart from "../assets/images/Heart.png";
import group from "../assets/images/Group 86.png";

type Props = {};

const CTA1 = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-12 lg:px-[69px] py-8 lg:py-[41px] gap-10 lg:gap-[176px] relative">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 max-w-lg">
        <h2 className="text-black font-inter font-semibold text-3xl md:text-4xl">
          Purchase Your Lessons & Learn
          <br />
          from the Best!
        </h2>
        <p className="text-gray-500 font-inter font-medium text-base md:text-lg leading-snug">
          Join our interactive courses and get hands-on experience with top
          industry professionals. Whether you're a beginner or an advanced
          learner, we have the perfect lesson for you.
        </p>
        <button className="bg-blue-600 text-white text-lg font-inter font-semibold mt-4 px-6 py-3 rounded-lg shadow-lg">
          Book Your Lessons
        </button>
      </div>

      {/* <div className="relative w-full max-w-[557px] h-[515px] flex justify-center items-center"> */}
      <div className="relative w-full max-w-[557px] h-[515px] justify-center items-center hidden sm:flex">

        <div className="absolute w-[386px] h-[386px] bg-[#d7dfef] rounded-full top-[115px] left-[85px] "></div>
        <Image
          className="absolute  w-[490px] h-[497px] top-[59.5px] left-[30px]  rounded-full "
          src={Microservice}
          alt="Lesson"
        />
        <div className="absolute w-[497px] h-[497px] border-4 border-red-500/50  rounded-full top-[60px] left-[30px] "></div>
        <div className="absolute bg-white shadow-lg rounded-lg px-5 py-2 w-[129px] h-[83px] top-[169px] left-[-40px] pt-12 pb-8 flex flex-col gap-0 items-end justify-center">
          <span className="text-center text-blue-600 text-lg font-inter ">
            1850+
          </span>
          <span className="text-gray-500 text-sm font-inter font-normal">
            Lessons
          </span>
        </div>
        <div className="absolute w-[18px] h-[18px] top-[180px] left-[16px] ">
          <Image src={heart} alt="Heart Icon" />
        </div>
        <Image
          className="absolute w-[60px] h-[60px] rounded-full border-4 border-white shadow-lg top-[109px] left-[426px]"
          src={group}
          alt="User"
        />
        <div className="absolute w-[60px] h-[60px] rounded-full border-4 border-white bg-gray-200 shadow-lg top-[58px] left-[130px] bg-white"></div>
        <div className="absolute w-[60px] h-[60px] rounded-full border-4 border-white bg-gray-200 shadow-lg top-[422px] left-[438px] bg-white"></div>
        <Image
          className="absolute w-[60px] h-[60px] rounded-full border-4 border-white shadow-lg top-[396px] left-[32px]"
          src={group}
          alt="User"
        />
        <div className="absolute w-[26px] h-[26px] top-[70px] left-[147px]">
          <Image src={doc} alt="Document Icon" />
        </div>

        <Image
          className="absolute w-[18px] h-[21px] top-[441px] left-[460px] rounded-full shadow-lg"
          src={shield}
          alt="Shield Icon"
        />
      </div>
    </div>
  );
};

export default CTA1;
