import React from "react";
import { GradianButton } from "../components/Buttons";

import HTML from "../assets/images/html.png";
import CSS from "../assets/images/CSS.png";
import CM from "../assets/images/CM-logo.png";
import JAVASCRIPT from "../assets/images/javascript.png";
import PYTHON from "../assets/images/python.png";
import SCRATCH2 from "../assets/images/scratch2 1.png";
import GROUP from "../assets/images/Group 7623.png";

type Props = {};

const Infinitescroll = (props: Props) => {
  return (
    <div className="animation flex overflow-hidden select-none gap-5 py-2 text-sm">
      <ul className="flex min-w-full shrink-0 items-center justify-between gap-5 animate-scroll px-0 py-10">
        <li>
          <GradianButton icon={SCRATCH2} label="SCRATCH" />
        </li>
        <li>
          <GradianButton icon={HTML} label="HTML" />
        </li>
        <li>
          <GradianButton icon={JAVASCRIPT} label="JAVASCRIPT" />
        </li>
        <li>
          <GradianButton icon={CSS} label="CSS" />
        </li>
        <li>
          <GradianButton icon={CM} label="CM" />
        </li>
        <li>
          <GradianButton icon={PYTHON} label="PYTHON" />
        </li>
      </ul>

      <ul
        className="flex min-w-full shrink-0 items-center justify-between gap-5 animate-scroll px-0 py-8"
        aria-hidden={true}
      >
        <li>
          <GradianButton icon={GROUP} label="ROBOTICS" />
        </li>
        <li>
          <GradianButton icon={SCRATCH2} label="SCRATCH" />
        </li>
        <li>
          <GradianButton icon={HTML} label="HTML" />
        </li>
        <li>
          <GradianButton icon={JAVASCRIPT} label="JAVASCRIPT" />
        </li>
        <li>
          <GradianButton icon={CSS} label="CSS" />
        </li>
        <li>
          <GradianButton icon={CM} label="CM" />
        </li>
        <li>
          <GradianButton icon={PYTHON} label="PYTHON" />
        </li>
      </ul>
    </div>
  );
};

export default Infinitescroll;
