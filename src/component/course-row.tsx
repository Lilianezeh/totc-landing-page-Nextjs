import React from "react";
import Image from "next/image";
import { FaArrowRight, FaStar } from "react-icons/fa";

type Pill = {
  label: string;
  color: string;
};

type CourseRowProps = {
  title: string;
  pillsBefore: Pill[];
  pillsAfter: Pill[];
  featured: {
    image: string;
    title: string;
    text: string;
    price: string;
    ring?: string;
  };
};

const CourseRow = ({ title, pillsBefore, pillsAfter, featured }: CourseRowProps) => {
  return (
    <div className="mb-10 md:mb-16 w-full">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h3 className="font-semibold text-gray-700 text-sm md:text-base">{title}</h3>
        <a href="#" className="text-xs md:text-sm text-[#49BBBD] font-semibold flex items-center gap-1">
          See all <FaArrowRight className="text-xs" />
        </a>
      </div>

      <div className="flex items-center justify-between w-full gap-2 overflow-x-auto pb-6 pt-4 px-2">
        {pillsBefore.map((pill, i) => (
          <div
            key={`before-${i}`}
            className={`${pill.color} -rotate-6 rounded-full w-8 md:w-9 h-48 md:h-56 shrink-0 flex items-center justify-center shadow-[0_15px_25px_-5px_rgba(0,0,0,0.45)] ring-4 ring-white/70`}
          >
            <span className="rotate-90 whitespace-nowrap text-white text-[10px] md:text-xs font-semibold">
              {pill.label}
            </span>
          </div>
        ))}

        <div
          className={`shrink-0 w-64 md:w-72 h-48 md:h-56 bg-white rounded-xl shadow-lg overflow-hidden relative z-10 flex flex-col ${
            featured.ring ? `ring-2 ${featured.ring}` : ""
          }`}
        >
          <div className="relative w-full h-28 md:h-32 shrink-0">
            <Image src={featured.image} alt={featured.title} fill className="object-cover" />
          </div>
          <div className="p-3 md:p-4 flex flex-col flex-1 justify-between">
            <div>
              <h4 className="font-bold text-xs md:text-sm mb-1">{featured.title}</h4>
              <p className="text-[10px] md:text-xs text-gray-500 mb-2">{featured.text}</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="flex gap-0.5 text-yellow-400 text-[10px] md:text-xs">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </span>
                <span className="text-xs md:text-sm font-bold">{featured.price}</span>
              </div>
              <button className="btn btn-xs md:btn-sm btn-outline border-[#49BBBD] text-[#49BBBD] rounded-full w-full">
                Explore
              </button>
            </div>
          </div>
        </div>

        {pillsAfter.map((pill, i) => (
          <div
            key={`after-${i}`}
            className={`${pill.color} -rotate-6 rounded-full w-8 md:w-9 h-48 md:h-56 shrink-0 flex items-center justify-center shadow-[0_15px_25px_-5px_rgba(0,0,0,0.45)] ring-4 ring-white/70`}
          >
            <span className="rotate-90 whitespace-nowrap text-white text-[10px] md:text-xs font-semibold">
              {pill.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseRow;