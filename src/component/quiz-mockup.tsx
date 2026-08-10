import React from "react";
import Image from "next/image";
import { FaCheck, FaTimes, FaPaperPlane } from "react-icons/fa";

const QuizMockup = () => {
  return (
    <div className="relative w-72">
        
      <div className="absolute -top-4 -left-4 w-10 h-10 border-4 border-[#3B82F6] rounded-full -z-10" />
      <span className="absolute -top-3 left-24 size-2 bg-[#F48C06] rounded-full -z-10" />
      <span className="absolute top-1/2 -right-3 size-2 bg-[#F14C6D] rounded-full -z-10" />
      <span className="absolute -bottom-3 -left-3 size-2 bg-[#2FC79E] rounded-full -z-10" />

      <div className="bg-white rounded-xl shadow-lg p-4">
        <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Question 1
        </span>
        <p className="font-semibold text-sm mb-3 text-[#252641]">
          True or false? This play takes place in Italy
        </p>
        <div className="relative w-full h-32 rounded-lg overflow-hidden">
          <Image
            src="/images/house.png"
            alt="Venice canal scene"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow z-10">
        <FaCheck className="text-green-500 text-xs" />
      </div>
      <div className="absolute -top-3 right-8 bg-white rounded-full p-2 shadow z-10">
        <FaTimes className="text-red-500 text-xs" />
      </div>

      <div className="absolute -bottom-6 left-4 bg-white rounded-lg shadow px-3 py-2 flex items-center gap-2 text-xs z-10">
        <FaPaperPlane className="text-green-500" />
        <span className="text-gray-600">Your answer was sent successfully</span>
      </div>
    </div>
  );
};

export default QuizMockup;