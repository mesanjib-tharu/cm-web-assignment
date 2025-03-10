import React from 'react';
import bannerBackground from '../assets/images/Rectangle.png';
import bannerImage from '../assets/images/Hero-banner.png';
import Image from 'next/image';
import Polygon from "../assets/images/Polygon 2.png";
import Live_TV from "../assets/images/live_tv.png";
import Cil_Child from "../assets/images/cil_child.png";
import { Button } from './Buttons';

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
            <h1 className='text-[48px] font-semibold text-nowrap'>Empowering Young Minds <br/> with <span className='text-[#0953E9]'>Future-Ready Skills! </span></h1>
            <p className='text-[20px]  mt-[34px]'>Join us in shaping the leaders of tomorrow through innovative learning experiences.</p>

            <div className='flex gap-[98px] mt-[23px] '>
            <div className='flex  gap-[9px]'>
              <Image src={Live_TV} alt='Live tv icon' width={20} height={18}/>
              <p className='text-[16px]'>Live 1:1 Classes</p>
            </div>

            <div className='flex gap-[9px]'>
            <Image src={Cil_Child} alt='Live tv icon' width={20} height={20} />
            <p className='text-[16px]'>For Ages 5-17</p>
            </div>
            </div>


            <div className="flex gap-[30px] mt-[34px]">
          <Button className='btn btn-md  text-nowrap btn-primary  font-semibold' label='Start Learning Now'/>
          <Button className='btn btn-md  text-nowrap btn-outline  font-semibold ' label='Talk to the Advisor'/>
        </div>


          </div>
           </div>
        <div className='w-[45%] h-[650px] hidden sm:block'>
          <Image
            src={bannerImage}
            alt="banner hero"
            className='opacity-100  z-50 h-full w-full '
          />
 
        </div>

      </div>

      <div className='absolute top-[40px] left-10'>
          <Image src={Polygon}/>
          <Image src={Polygon} className=' w-[100px] absolute left-8 top-[56px]'/>
      </div>
      </div>
   
    </div>
  );
};

export default HeroBanner;
