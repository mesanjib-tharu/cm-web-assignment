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
    <div className="flex gap-[10px] text-center items-center"> 
        <p className="font-medium text-[24px] text-[#0953E9]">{items.icon}</p>
        <p className="font-medium text-[24px] text-[#0953E9]">{items.label}</p>
    </div>
  );
};

export default HelperFAQ;
