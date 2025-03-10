import React from 'react';
import bannerBackground from '../assets/images/Rectangle.png';
import bannerImage from '../assets/images/Hero-banner.png';
import Image from 'next/image';
import Polygon from "../assets/images/Polygon 2.png";


type Props = {};

const HeroBanner = (props: Props) => {
  return (
    <div
      className="px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerBackground.src})` }}
    >
      <div className='relative top-24 left-6 '>
          <Image src={Polygon}  className='w-[80px]'/>
          <Image src={Polygon} className='absolute w-[100px] left-8 top-[55px]'/>
          </div>
      <div className="flex justify-between bg-[#fff] bg-opacity-[20%] rounded-tl-2xl rounded-tr-2xl  ">
          <div className=' flex justify-center items-center w-[626px] px-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Esse modi culpa quam provident! Cupiditate quidem voluptates molestias pariatur autem, minus neque,
              nesciunt optio assumenda a deleniti perspiciatis harum modi maiores.
           </div>
        <div>
          <Image
            src={bannerImage} // This should work fine
            alt="banner hero"
            className='opacity-100 z-50 h-full w-full px-[14px] '
          />
 
        </div>
      </div>
   
    </div>
  );
};

export default HeroBanner;
