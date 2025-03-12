import React from 'react';
import Image from 'next/image';
import Quatation from "../assets/images/testimonials.png";
type Props = {}

const Testimonials = (props: Props) => {
  return (
    <div className='flex flex-col  p-[65px]  justify-center items-center'>
        <h2 className="text-[#0B0B0B] text-[36px] font-semibold leading-[28px] mb-[30px]">
        Trusted by Parents like you!
        </h2>


        <div className="flex justify-between gap-5 py-[65px]  w-full h-[430px] relative">
            <div className='absolute top-7 left-[0px] w-[420px] border p-5 rounded-3xl '>
                <Image src={Quatation} className='w-[24px] h-[24px]' />
                <p>“My child absolutely enjoys the coding sessions! The classes are highly interactive and engaging, making learning fun and exciting.
                     The one-hour sessions fly by, and even after months, the enthusiasm remains high.
                     A fantastic experience for young minds! Thank you, CodeMantra team!"
                 </p>
                 <span>— Samer S.</span>
            </div>

            <div className='absolute top-2 left-[450px] w-[420px] border p-5 rounded-3xl'>
                <Image src={Quatation} className='w-[24px] h-[24px]' />
                <p>“My child absolutely enjoys the coding sessions! The classes are highly interactive and engaging, making learning fun and exciting.
                     The one-hour sessions fly by, and even after months, the enthusiasm remains high.
                     A fantastic experience for young minds! Thank you, CodeMantra team!"
                 </p>
                 <span>— Samer S.</span>
            </div>

            <div className='absolute top-7 left-[900px] w-[420px] border p-5 rounded-3xl '>
                <Image src={Quatation} className='w-[24px] h-[24px]' />
                <p>“My child absolutely enjoys the coding sessions! The classes are highly interactive and engaging, making learning fun and exciting.
                     The one-hour sessions fly by, and even after months, the enthusiasm remains high.
                     A fantastic experience for young minds! Thank you, CodeMantra team!"
                 </p>
                 <span>— Samer S.</span>
            </div>

        </div>


    </div>
  )
}

export default Testimonials