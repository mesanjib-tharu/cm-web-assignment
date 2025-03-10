import React from 'react'
import Slider from './Slider';
import { SliderData } from '../data/sliderData';
import { Button } from './Buttons';

type Props = {}

const Courses = (props: Props) => {

  return ( 
    <div className='bg-[#E8F2FF] w-full flex justify-center'>

        <div className='px-[124px]'>

        <h1 className='text-center items-center pb-[32px] pt-[44px] text-[36px] font-semibold'>Courses We Provide</h1>
        <Slider items={SliderData} />

<div className='flex justify-center items-center text-center py-8'>

        <Button className='btn btn-md  text-center items-center text-nowrap btn-primary  font-semibold' label='View All Cources'/>
</div>
        </div>

    </div>
  )
}

export default Courses