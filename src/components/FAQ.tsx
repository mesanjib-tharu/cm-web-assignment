import React from "react";
import HelperFAQ from "../Helper/component/FAQ";

const FAQ = () => {
  return (
    <div className="flex flex-col text-center items-center pt-[34px] pb-[27px] px-[65px]">
      <h2 className="pb-[29px] font-semibold text-[36px] text-[#0B0B0B]">FAQ+</h2>

      <div className="flex flex-col gap-6">
        <HelperFAQ items={{ icon: "+", label: "What age group is best suited for your courses?" }} />
        <HelperFAQ items={{ icon: "+", label: "Does my child need prior coding experience?" }} />
        <HelperFAQ items={{ icon: "+", label: "How are the classes conducted?" }} />
        <HelperFAQ items={{ icon: "+", label: "What programming languages do you teach?" }} />
        <HelperFAQ items={{ icon: "+", label: "How can I enroll my child in a course?" }} />
        <HelperFAQ items={{ icon: "+", label: "Will my child build real projects?" }} />
        <HelperFAQ items={{ icon: "+", label: "How can I track my child’s progress?" }} />
      </div>
    </div>
  );
};

export default FAQ;
