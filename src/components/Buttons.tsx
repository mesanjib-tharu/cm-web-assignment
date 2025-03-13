import React from 'react'
import  Scratch from "../assets/images/CSS.png"
import Image from "next/image";
import DefaultImage from "../assets/images/Heart.png"; // Import a default image
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
 
interface propsType {
    className?: string; 
    label?:string
  }

  interface gradiantPropsType {
    icon: string | StaticImport; // ✅ Allow both types
    label: string;
  }

export const Button = ({ className,label }: propsType) => {
  return (
    // <button className={`btn btn-sm btn-outline  font-medium`}>Small Button</button>
    <button className={`${className}`}>{label}</button>
  )
}




export const GradianButton = ({ icon, label }: gradiantPropsType) => {
  return (
    <div className="md:flex flex-col gap-4">
      <button className="btn btn-md text-[#383737] md:text-[20px] text-[14px] flex items-center gap-2 rounded-[32px] shadow-md bg-[linear-gradient(180deg,_rgba(2,119,189,0.12)_0%,_rgba(235,235,235,1)_100%)] border border-[#E0E0E0]">
        <Image src={icon} alt={label || "icon image"} width={29} height={28} />
        {label?.toUpperCase()}
      </button>
    </div>
  );
};








