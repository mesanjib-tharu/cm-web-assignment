import React from "react";
import Image from "next/image";
import Group from "../assets/images/Group 86.png";
import RightIcon from "../assets/images/RightIcon.png";
import Register from "../assets/images/Register.png";
import Laptop from "../assets/images/Laptop.png";
import Calendar from "../assets/images/Calendar.png";
import BiLaptop from "../assets/images/bi_laptop-fill.png";

type Props = {
  title: string;
  icon: string;
  description: string;
};

interface workProps {
  items: Props[];
}

const Works = () => {
  return (
    <div className="flex justify-between px-[65px] py-[28px]  items-center ">
      <div className="flex flex-col gap-[21px] w-1/2  max-w-xl">
        <h2 className="text-[36px] font-semibold leading-[160%] mb-[8px]">
          <span className="text-[#393939]">Here’s how it</span>{" "}
          <span className="text-blue-600">works</span>
          <span className="text-[#393939]">!</span>
        </h2>

        <div className="bg-white rounded-xl p-4  shadow-[0px_-2px_128px_rgba(0,59,179,0.14)] flex gap-4 items-start">
          <div className="w-[52px] p-1 h-[52] rounded-full bg-blue-500">
            <Image
              src={BiLaptop}
              alt="Tick"
              className=" p-1 flex-shrink-0 w-full h-full"
            />
          </div>

          <div>
            <h3 className="font-semibold text-[16px] text-gray-custom">
              Register
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Click on the Enroll button and complete your registration form.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4  shadow-[0px_-2px_128px_rgba(0,59,179,0.14)] flex gap-4 items-start">
          <div className="w-[52px] p-1 h-[52] rounded-full bg-blue-500">
            <Image
              src={Calendar}
              alt="Tick"
              className="p-1 flex-shrink-0 w-full h-full"
            />
          </div>
          <div>
            <h3 className="font-semibold text-[16px] text-gray-custom">
              Choose Your Career
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Choose the best course for you.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4  shadow-[0px_-2px_128px_rgba(0,59,179,0.14)] flex gap-4 items-start">
          <div className="w-[55px] p-1 h-[55px] rounded-full bg-blue-500">
            <Image
              src={Laptop}
              alt="Tick"
              className="p-1 flex-shrink-0 w-full h-full "
            />
          </div>
          <div>
            <h3 className="font-semibold text-[16px] text-gray-custom">
              Start Learning
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              You’re on the way to become a professional personal.
            </p>
          </div>
        </div>
      </div>

{/* <div className="bg-red-300 w-[200px] h-[200px]">
    red
</div> */}
      <div className="relative  w-[400px] h-[400px]  px-12">
        <Image
          className="absolute w-[386px] h-[386px] inset-0 bg-[#d7dfef"
          src={Group}
          alt="Lesson"
        />
        <div className="absolute w-[386px] h-[386px] inset-0 bg-opacity-75 rounded-3xl"></div>

        <div
          class="absolute top-[250px] left-[250px]  w-[150px] h-[150px] bg-blue-600 rounded-tr-[20px] [clip-path:polygon(0%_100%,100%_100%,100%_0%)]
      rounded-bl-[20px] 
      rounded-br-[10px] 
      "
        ></div>
      </div>
    </div>
  );
};

export default Works;
