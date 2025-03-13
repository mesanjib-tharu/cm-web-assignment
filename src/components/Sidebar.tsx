"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { footerSections } from "../data/sliderData";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="relative z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black focus:outline-none md:hidden"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <FiX className="w-6 h-6 text-gray-800" />
        ) : (
          <FiMenu className="w-6 h-6 text-gray-800" />
        )}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-[200px] bg-white shadow-md z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-800"
          aria-label="Close Menu"
        >
          <FiX className="w-5 h-5" />
        </button>

        <ul className="flex flex-col p-6 space-y-4 text-lg font-medium">
          {footerSections?.[0]?.links?.map((item, index) => {
            const isActive = pathname === item?.href;
            return (
              <li
                key={index}
                className={`${isActive ? "text-blue-600" : "text-black"}`}
              >
                <Link href={item?.href} onClick={() => setIsOpen(false)}>
                  <span className="relative text-[16px] font-medium">
                    {item?.label}
                    {isActive && (
                      <span className="absolute left-0 bottom-[-8px] w-[80%] h-[3px] bg-blue-600"></span>
                    )}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
