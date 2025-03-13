import React from 'react'
import Image from 'next/image';
import Logo from "../assets/images/CM-logo.png"
import { Button } from './Buttons';
import Sidebar from './Sidebar';
import { footerSections } from '../data/sliderData';


type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-full px-[40px] py-[18px] border-t-[1px] border-b-[1px] border-solid border-t-[rgba(0,0,0,0.25)] border-b-[rgba(0,0,0,0.25)]'>
    {/* <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:pag-y-0"> */}
    <div className=" flex justify-between">
      
      <div className="flex justify-center lg:justify-normal">
     
          <Image src={Logo} alt='logo' className='md:w-[119px] md:h-[63px] w-[80px] h-[40px]'/>

      </div>
  
        <ul className='md:flex hidden text-center items-center gap-4'>
          <li className='active'>
            <a className="text-[16px] font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-[80%] after:h-[3px] after:bg-blue-600 after:scale-x-100">
              Home
              </a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Courses</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
        </ul>


      <div className='flex text-center items-center md:gap-4 gap-1'>
        <Button className={'btn btn-sm btn-outline text-nowrap  text-[16px]'} label={"Login"} />
        <Button className={'btn btn-sm btn-primary  text-nowrap text-[16px] '} label={"Sign Up"}/>
   
        <Sidebar />
   
        {/* <Button className={'flex md:hidden border  border-gray-custom  px-2 py-[2px] text-gray-custom rounded-md text-nowrap text-[16px] '} label={"X"}/> */}
      </div>


      </div>
</header>
  )
}

export default Header