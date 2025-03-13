import React from "react";
import Slider from "./Slider";
import { SliderData } from "../data/sliderData";
import { Button } from "./Buttons";

const Courses = () => {
  return (
    <div className="bg-[#E8F2FF] w-full flex justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24">
        <h1 className="text-center pb-8 pt-10 text-2xl sm:text-3xl md:text-4xl font-semibold">
          Courses We Provide
        </h1>
        <Slider items={SliderData} />
        <div className="flex justify-center py-8">
          <Button
            className="btn btn-md w-full sm:w-auto px-6 py-3 text-nowrap btn-primary font-semibold"
            label="View All Courses"
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
