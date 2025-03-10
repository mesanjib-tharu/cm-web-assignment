import React from 'react'
import  Scratch from "../assets/images/CSS.png"
import Image from "next/image";

interface propsType {
    className?: string; 
    label?:string
  }

const Button = ({ className,label }: propsType) => {
  return (
    // <button className={`btn btn-sm btn-outline  font-medium`}>Small Button</button>
    <button className={`${className}`}>{label}</button>
  )
}

// export const MediumButton = () => {
//     return (
//      <>
     
//      <button className='btn btn-md btn-primary  font-medium'>Medium Button</button>
//      <br/>
//      <button className='btn btn-md btn-outline  font-medium'>Medium Button</button>
//      </>
  
//     )
//   }



// export const LargeButton = () => {
//     return (
//         <div className='flex gap-4'>
//          <button className='btn btn-lg  text-[#383737] text-[20px] flex items-center gap-2 rounded-[32px] shadow-md  bg-[linear-gradient(180deg,_rgba(2,119,189,0.12)_0%,_rgba(235,235,235,1)_100%)] border border-[#E0E0E0]'>
//             <Image src={Scratch} alt="Logo" width={29} height={28} />
//             Large Buttons
//             </button>
//         </div>
     
//     )
//   }



export default Button;