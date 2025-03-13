import React from "react";
import Image from "next/image";
import Quatation from "../assets/images/testimonials.png";
type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className="flex flex-col  md:p-[65px] p-4  justify-center items-center">
      <h2 className="text-[#0B0B0B] text-[36px] font-semibold md:leading-[28px] mb-[30px]">
        Trusted by Parents like you!
      </h2>

      <div className="md:flex gap-5 flex-col justify-between  py-[65px]  w-full md:h-[430px] h-full md:relative">
        <div className="md:absolute md:top-7 md:left-[0px] w-[420px] border p-5 rounded-3xl ">
          <Image src={Quatation} className="w-[24px] md:h-[24px]" />
          <p>
            “My child absolutely enjoys the coding sessions! The classes are
            highly interactive and engaging, making learning fun and exciting.
            The one-hour sessions fly by, and even after months, the enthusiasm
            remains high. A fantastic experience for young minds! Thank you,
            CodeMantra team!"
          </p>
          <span>— Samer S.</span>
        </div>

        <div className="md:absolute md:top-2 md:left-[450px] w-[420px] border p-5 rounded-3xl">
          <Image src={Quatation} className="w-[24px] h-[24px]" />
          <p>
            “My child absolutely enjoys the coding sessions! The classes are
            highly interactive and engaging, making learning fun and exciting.
            The one-hour sessions fly by, and even after months, the enthusiasm
            remains high. A fantastic experience for young minds! Thank you,
            CodeMantra team!"
          </p>
          <span>— Samer S.</span>
        </div>

        <div className="md:absolute md:top-7 md:left-[900px] w-[420px] border p-5 rounded-3xl ">
          <Image src={Quatation} className="w-[24px] h-[24px]" />
          <p>
            “My child absolutely enjoys the coding sessions! The classes are
            highly interactive and engaging, making learning fun and exciting.
            The one-hour sessions fly by, and even after months, the enthusiasm
            remains high. A fantastic experience for young minds! Thank you,
            CodeMantra team!"
          </p>
          <span>— Samer S.</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
