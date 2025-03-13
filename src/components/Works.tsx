import React from "react";
import Image from "next/image";
import Group from "../assets/images/Group 86.png";
import Laptop from "../assets/images/Laptop.png";
import Calendar from "../assets/images/Calendar.png";
import BiLaptop from "../assets/images/bi_laptop-fill.png";

const Works = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-6 sm:px-12 lg:px-[65px] py-10 gap-10">
      <div className="flex flex-col gap-6 w-full lg:w-1/2 max-w-xl">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-[160%]">
          <span className="text-[#393939]">Here’s how it</span>{" "}
          <span className="text-blue-600">works</span>
          <span className="text-[#393939]">!</span>
        </h2>
        {[
          {
            icon: BiLaptop,
            title: "Register",
            desc: "Click on the Enroll button and complete your registration form.",
          },
          {
            icon: Calendar,
            title: "Choose Your Career",
            desc: "Choose the best course for you.",
          },
          {
            icon: Laptop,
            title: "Start Learning",
            desc: "You’re on the way to become a professional.",
          },
        ].map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-lg flex gap-4 items-start"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500">
              <Image src={step.icon} alt="Icon" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative  w-[400px] h-[400px]  px-12">
        <Image
          className="absolute w-[386px] h-[386px] inset-0 bg-[#d7dfef"
          src={Group}
          alt="Lesson"
        />
        <div className="absolute w-[386px] h-[386px] inset-0 bg-opacity-75 rounded-3xl"></div>

        <div
          className="absolute top-[250px] left-[250px]  w-[150px] h-[150px] bg-blue-600 rounded-tr-[20px] [clip-path:polygon(0%_100%,100%_100%,100%_0%)]
      rounded-bl-[20px] 
      rounded-br-[10px] 
      "
        ></div>
      </div>
    </div>
  );
};

export default Works;
