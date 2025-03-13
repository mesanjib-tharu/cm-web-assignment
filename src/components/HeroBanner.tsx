import React from "react";
import Image from "next/image";
import bannerBackground from "../assets/images/Rectangle.png";
import bannerImage from "../assets/images/Hero-banner.png";
import Polygon from "../assets/images/Polygon 2.png";
import Live_TV from "../assets/images/live_tv.png";
import Cil_Child from "../assets/images/cil_child.png";
import { Button } from "./Buttons";

const HeroBanner = () => {
  return (
    <div
      className="px-4 md:px-8 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bannerBackground.src})` }}
    >
      <div className="w-full pt-8">
        <div className="flex flex-col lg:flex-row justify-between bg-white bg-opacity-30 rounded-tl-2xl rounded-tr-2xl relative">
          {/* Heading - First on Mobile, Left Side on Desktop */}
          <div className="flex flex-col w-full lg:w-[50%] p-6 lg:p-10 order-1 lg:order-none z-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center lg:text-left">
              Empowering Young Minds <br /> with {" "}
              <span className="text-[#0953E9]">Future-Ready Skills!</span>
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Join us in shaping the leaders of tomorrow through innovative
              learning experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[50px] mt-6">
              <div className="flex items-center gap-2">
                <Image src={Live_TV} alt="Live TV" width={20} height={18} />
                <p className="text-[16px]">Live 1:1 Classes</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={Cil_Child} alt="For Ages 5-17" width={20} height={20} />
                <p className="text-[16px]">For Ages 5-17</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
              <Button className="btn btn-md text-nowrap btn-primary font-semibold" label="Start Learning Now" />
              <Button className="btn btn-md text-nowrap btn-outline font-semibold" label="Talk to the Advisor" />
            </div>
          </div>
          
          {/* Banner Image - Second on Mobile, Right Side on Desktop */}
          <div className="w-full lg:w-[50%] h-auto lg:h-[650px] order-2 lg:order-none flex justify-center lg:justify-end">
            <Image
              src={bannerImage}
              alt="Hero Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute top-[40px] left-6 sm:left-10 z-10">
          <Image src={Polygon} alt="Polygon Shape " />
          <Image
            src={Polygon}
            alt="Polygon Shape"
            className="w-[80px] sm:w-[100px] absolute left-4 sm:left-8 top-[40px] sm:top-[56px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;