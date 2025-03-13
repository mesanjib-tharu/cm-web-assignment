import React from "react";
import Image from "next/image";
import ctaImage from "../assets/images/cta-image (1).png";
import ArrowImage from "../assets/images/arrow-csv.png";

const Learning = () => {
  return (
    <div className="w-full relative flex justify-center px-4 md:px-10 lg:px-[65px] py-10">
      <div className="w-full  relative">
        <div className="absolute w-full h-full bg-[#0953E9] rounded-[32px] px-6 sm:px-12 md:px-[100px] lg:px-[168px] py-10 sm:py-[50px] lg:py-[70px]"></div>

        <div className="relative w-full flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[268px]">
          <div className="relative  px-4 py-4 flex flex-col gap-6 max-w-[684px] text-center lg:text-left">
            <h2 className="text-white text-[28px] md:text-[32px] font-semibold leading-[28px] md:leading-[36px]">
              Ready to Shape the Future of Tech?
            </h2>
            <p className="text-white text-[16px] md:text-[18px] font-medium max-w-[545px]">
              Be part of an innovative journey, collaborate with industry
              experts, and make a real impact.
            </p>
            <button className="bg-white text-black text-[16px] font-semibold rounded-[17px] w-[139px] h-[46px] flex items-center justify-center self-center lg:self-start">
              Start Learning
            </button>

            <Image
              src={ArrowImage}
              alt="Curved Arrow"
              className="hidden sm:block absolute left-[50px] sm:left-[100px] md:left-[140px] lg:left-[178px] top-[-30px] sm:top-[-20px] lg:top-[12px] w-[200px] sm:w-[300px] md:w-[500px] lg:w-[713px] h-auto"
            />
          </div>

          <div className="relative flex items-center justify-center mt-6 lg:mt-0">
            <Image
              src={ctaImage}
              alt="CTA Image"
              className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[381px] h-auto rounded-[32px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
