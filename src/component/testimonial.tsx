import React from "react";
import Image from "next/image";
import { FaStar, FaChevronRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-32 py-16 md:py-20">
      <div>
        <span className="text-xs font-semibold text-gray-400 tracking-widest flex items-center gap-2 mb-2">
          <span className="w-6 h-px bg-gray-300" /> TESTIMONIAL
        </span>
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#252641]">
          What They <span className="text-[#49BBBD]">Say?</span>
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          TOTC has got more than 100k positive ratings from our users around
          the world.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Some of the students and teachers were greatly helped by the
          Skiline,
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Are you too? Please give your assessment
        </p>
        <button className="btn btn-outline rounded-full border-[#49BBBD] text-[#49BBBD] gap-2">
          Write your assessment <FaChevronRight className="text-xs" />
        </button>
      </div>

      <div className="relative pb-20 md:pb-4">
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mt-6 md:mt-8">
          <Image
            src="/images/testimonial.png"
            alt="Happy student"
            fill
            className="object-cover rounded-[3rem]"
          />
        </div>

        <div className="absolute bottom-0 left-4 right-4 md:-bottom-8 md:left-8 md:right-8 bg-white rounded-xl shadow-lg p-4 md:p-5">
          <p className="text-xs md:text-sm text-gray-600 italic mb-2 md:mb-3">
            &quot;Thank you so much for your help. It&apos;s exactly what
            I&apos;ve been looking for. You won&apos;t regret it. It really
            saves me time and effort. TOTC is exactly what our business has
            been lacking.&quot;
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-xs md:text-sm">Gloria Rose</p>
              <p className="text-[10px] md:text-xs text-gray-400">
                12 reviews at Yelp
              </p>
            </div>
            <span className="flex gap-0.5 text-yellow-400 text-xs">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;