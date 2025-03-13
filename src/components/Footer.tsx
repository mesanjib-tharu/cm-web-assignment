import React from "react";
import Image from "next/image";
import Facebook from "../assets/images/Facebook.png";
import Instagram from "../assets/images/Instagram.png";
import Youtube from "../assets/images/logos_youtube-icon.png";
import LinkedIn from "../assets/images/skill-icons_linkedin.png";

type FooterLink = {
  label: string;
  href?: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type FooterProps = {
  sections: FooterSection[];
  contactInfo: FooterSection;
};

const Footer: React.FC<FooterProps> = ({ sections, contactInfo }) => {
  return (
    <footer className="w-full bg-gray-100 py-10 px-6 md:px-16 bg-[#E6E6E6]">
      <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
        <div className="space-y-2">
          <h3 className="text-[24px] font-semibold">{contactInfo.title}</h3>
          {contactInfo.links.map((link, index) => (
            <div key={index} className="mt-2">
              <p className="text-[16px] text-black">{link.label}</p>
              <p className="text-[20px] font-medium text-black hover:text-[#0953E9] cursor-pointer">
                {link.href ? (
                  <a className="text-[20px]" href={link.href}>
                    {link.href}
                  </a>
                ) : (
                  link.label
                )}
              </p>
            </div>
          ))}
        </div>

        {sections.map((section, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-[24px] font-semibold">{section.title}</h3>
            {section.links.map((link, index) => (
              <p
                key={index}
                className="text-[20px] text-black font-medium cursor-pointer hover:text-[#0953E9]"
              >
                {link.href ? (
                  <a className="text-[20px]" href={link.href}>
                    {link.label}
                  </a>
                ) : (
                  link.label
                )}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-2 text-center md:grid-cols-3 md:text-center sm:text-center mt-[100px]">
        <div className="flex flex-col items-center text-center gap-4 md:flex-row md:justify-between md:order-1 order-3">
          <p className="text-[16px] font-medium text-black">
            © CodeMantra 2025 - All rights reserved.
          </p>
        </div>

        <div className="order-2"></div>
        <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-700 items-center text-center md:order-3 order-1">
          <Image
            src={Facebook}
            className="w-[40px] h-[40px] cursor-pointer hover:text-gray-900"
          />
          <Image
            src={Instagram}
            className="w-[40px] h-[40px] cursor-pointer hover:text-gray-900"
          />
          <Image
            src={LinkedIn}
            className="w-[28px] h-[28px] cursor-pointer hover:text-gray-900"
          />
          <Image
            src={Youtube}
            className="w-[43px] h-[30px] cursor-pointer hover:text-gray-900"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
