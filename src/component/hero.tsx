import React from "react";
import { FaPlay, FaChartBar, FaCalendarAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative grid md:grid-cols-2 gap-4 bg-[#49BBBD] w-full min-h-[36rem] md:h-[50rem] [clip-path:ellipse(120%_100%_at_50%_0%)] overflow-hidden">
      <div className="text-white px-6 md:px-32 flex flex-col justify-center gap-4 md:gap-6 py-16 md:py-0">
        <p className="font-bold text-3xl sm:text-4xl md:text-4xl">
          <span className="text-[#F48C06]">Studying</span> Online is now much
          easier
        </p>

        <small className="text-base md:text-xl">
          TOTC is an interesting platform that will teach you in a more
          interactive way
        </small>

        <div className="flex flex-wrap items-center gap-4">
          <button className="btn-ghost-totc">Join for free</button>
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-full size-12 flex items-center justify-center shrink-0">
              <FaPlay className="text-[#49BBBD]" />
            </div>
            <button className="text-white text-sm md:text-base">
              Watch how it works
            </button>
          </div>
        </div>
      </div>


      <div className="relative h-64 sm:h-80 md:h-auto">
        <Image
          src="/images/tennage-girl-holding-books.png"
          alt="Student holding books"
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="hidden md:flex absolute top-[38%] left-[55%] bg-white rounded-xl shadow-lg px-4 py-3 items-center gap-3">
        <div className="bg-[#49BBBD] rounded-lg p-2">
          <FaCalendarAlt className="text-white text-sm" />
        </div>
        <div>
          <p className="font-bold text-sm text-[#252641]">250k</p>
          <p className="text-xs text-gray-400">Assisted Student</p>
        </div>
      </div>

      <div className="hidden md:block absolute top-[32%] right-[15%] bg-[#F14C6D] rounded-xl shadow-lg p-3">
        <FaChartBar className="text-white" />
      </div>

      <div className="hidden md:flex absolute top-[56%] right-[10%] bg-white rounded-xl shadow-lg px-4 py-3 items-center gap-3 max-w-[220px]">
        <div className="bg-[#F48C06] rounded-lg p-2 shrink-0">
          <FaEnvelope className="text-white text-sm" />
        </div>
        <div>
          <p className="font-semibold text-sm text-[#252641]">
            Congratulations
          </p>
          <p className="text-xs text-gray-400">Your admission completed</p>
        </div>
      </div>

      <div className="hidden md:block absolute top-[68%] left-[54%] bg-white rounded-xl shadow-lg p-4 max-w-[220px]">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative size-8 rounded-full overflow-hidden shrink-0">
            <Image
              src="/images/avatar1.png"
              alt="Instructor"
              fill
              className="object-cover"
            />
            <span className="absolute bottom-0 right-0 size-2.5 bg-green-500 rounded-full border-2 border-white" />
          </div>
          <div>
            <p className="font-semibold text-sm text-[#252641]">
              User Experience Class
            </p>
            <p className="text-xs text-gray-400">Today at 12:00 PM</p>
          </div>
        </div>
        <button className="btn btn-sm bg-[#F14C6D] text-white border-none rounded-full w-full">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Hero;