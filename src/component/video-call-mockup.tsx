// component/video-call-mockup.tsx
import React from "react";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";

const VideoCallMockup = () => {
  return (
    <div className="bg-gray-50 rounded-2xl p-4 md:p-6 w-full max-w-md mx-auto md:mx-0 md:w-fit">
      <div className="flex items-start gap-2 md:gap-3">
        {/* Presenter tile + buttons stacked together */}
        <div className="flex flex-col gap-0.5 md:gap-1 shrink-0">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl overflow-hidden">
            <Image src="/images/avatar1.png" alt="Presenter" fill className="object-cover" />
            <span className="absolute top-1 left-1 md:top-2 md:left-2 text-[8px] md:text-[10px] font-semibold text-white bg-[#2563EB] px-1.5 md:px-2 py-0.5 rounded">
              Presenter
            </span>
          </div>

          <div className="flex gap-1.5 md:gap-2">
            <button className="btn btn-xs bg-[#2563EB] text-white border-none rounded-full px-3 flex-1">
              Present
            </button>
            <button className="btn btn-xs bg-[#EF4444] text-white border-none rounded-full px-3 flex-1 flex items-center gap-1">
              <FaPhone className="text-[8px]" /> Call
            </button>
          </div>
        </div>

        {/* Tamara + Humbert small cluster */}
        <div className="flex flex-col gap-1.5 md:gap-2 w-12 sm:w-14 md:w-16 h-20 sm:h-24 md:h-28 mt-5 md:mt-6 shrink-0">
          <div className="relative flex-1 rounded-lg overflow-hidden">
            <Image src="/images/avatar2.png" alt="Tamara Clarke" fill className="object-cover" />
            <span className="absolute bottom-0.5 left-0.5 text-[5px] md:text-[6px] text-white bg-black/40 px-1 rounded">
              Tamara Clarke
            </span>
          </div>
          <div className="relative flex-1 rounded-lg overflow-hidden">
            <Image src="/images/avatar4.png" alt="Humbert Holland" fill className="object-cover" />
            <span className="absolute bottom-0.5 left-0.5 text-[5px] md:text-[6px] text-white bg-black/40 px-1 rounded">
              Humbert Holland
            </span>
          </div>
        </div>

        {/* Adam + Patricia — names already baked into these photos, no overlay label needed */}
        <div className="flex flex-col gap-2 md:gap-3 w-20 sm:w-24 md:w-28 h-28 sm:h-36 md:h-44 mt-5 md:mt-6 shrink-0">
          <div className="relative flex-1 rounded-lg overflow-hidden">
            <Image
              src="/images/avatar3.png"
              alt="Adam Levi"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="relative flex-1 rounded-lg overflow-hidden">
            <Image
              src="/images/avatar5.png"
              alt="Patricia Mendoza"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCallMockup;