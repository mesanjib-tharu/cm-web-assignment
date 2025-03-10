import React from 'react';
import bannerBackground from '../assets/images/Rectangle.png';
import bannerImage from '../assets/images/Hero-banner.png';
import Image from 'next/image';
import Polygon from "../assets/images/Polygon 2.png";


type Props = {};

const HeroBanner = (props: Props) => {
  return (
    <div
      className="px-8 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bannerBackground.src})` }}
    >
      <div className='w-full pt-8'>
 
      <div className="flex justify-between bg-[#fff] bg-opacity-[30%] rounded-tl-2xl rounded-tr-2xl relative">
      
          <div className='flex  justify-start items-center sm:w-[40%] w-full p-4'>
          <div className="flex flex-col">
            <h1 className='text-[48px] font-semibold'>Empowering Young Minds  with <span className='text-[#0953E9]'>Future-Ready Skills! </span></h1>
            <p className='text-[20px]  mt-[34px]'>Join us in shaping the leaders of tomorrow through innovative learning experiences.</p>

          </div>
           </div>
        <div className='w-[45%] hidden sm:block'>
          <Image
            src={bannerImage}
            alt="banner hero"
            className='opacity-100  z-50 h-full w-full px-[14px] '
          />
 
        </div>
      </div>

      <div className='absolute top-[70px] left-12'>
          <Image src={Polygon}  className='w-[80px]'/>
          <Image src={Polygon} className=' w-[100px] absolute left-8 top-[56px]'/>
      </div>
      </div>
   
    </div>
  );
};

export default HeroBanner;
