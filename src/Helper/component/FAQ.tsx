import React from "react";

type FAQProps = {
    icon: string;
    label: string;
};

interface faqInterface {
    items: FAQProps;
}

const HelperFAQ: React.FC<faqInterface> = ({ items }) => {
  return (
    <div className="flex  gap-3 md:gap-4 text-center items-center w-full border-b pb-3 md:pb-4"> 
        <p className="font-medium text-[20px] md:text-[22px] lg:text-[24px] text-[#0953E9]">
          {items.icon}
        </p>
        <p className="font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#0953E9]">
          {items.label}
        </p>
    </div>
  );
};

export default HelperFAQ;
