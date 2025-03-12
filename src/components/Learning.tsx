import React from "react";
import Image from "next/image";
import ctaImage from "../assets/images/cta-image (1).png";
import ArrowImage from "../assets/images/arrow-csv.png";
type Props = {};

const Learning = (props: Props) => {
  return (
    <div className="relative flex justify-center px-[65px]">
      <div className="w-full relative">
        <div className="absolute w-full h-full bg-[#0953E9] rounded-[32px] px-[168px] py-[70px]"></div>
        <div className="relative w-full h-[268px] flex justify-between">
          <div className="absolute top-[47px] left-[77px] flex flex-col gap-[26px] w-[684px]">
            <h2 className="text-white text-[28px] font-semibold leading-[28px]">
              Ready to Shape the Future of Tech?
            </h2>
            <p className="text-white text-[16px] font-medium w-[545px]">
              Be part of an innovative journey, collaborate with industry
              experts, and make a real impact.
            </p>
            <button className="bg-white text-black text-[16px] font-semibold rounded-[17px] w-[139px] h-[46px] flex items-center justify-center">
              Start Learning
            </button>
          </div>
          <Image
            src={ctaImage}
            alt="CTA Image"
            className="absolute right-0 w-[381px] h-[268px] rounded-[32px] object-cover"
          />
          <Image
            src={ArrowImage}
            alt="Curved Arrow"
            className="absolute left-[178px] top-[12px] w-[713.06px] h-[241.64px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Learning;
