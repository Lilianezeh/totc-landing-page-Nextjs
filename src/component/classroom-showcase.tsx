// component/classroom-showcase.tsx
import React from "react";
import Image from "next/image";

const ClassroomShowcase = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-32 py-20 relative">
      <div>
        <span className="inline-block bg-[#2FC79E] rounded-full size-3 mb-4" />
        <h2 className="text-1xl font-bold mb-4 text-[#252641]">
          Everything you can do in a physical classroom,{" "}
          <span className="text-[#49BBBD]">you can do with TOTC</span>
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          TOTC&apos;s school management software helps traditional and online
          schools manage scheduling, attendance, payments and virtual
          classrooms all in one secure cloud-based system.
        </p>
        <a href="#" className="text-sm font-semibold underline text-[#252641]">
          Learn more
        </a>

        {/* small dot decoration near the text/photo boundary */}
        <span className="hidden md:block absolute bottom-61 left-[48%] bg-[#2FC79E] rounded-full size-2.5" />
      </div>

      <div className="relative h-72 md:h-96">
        {/* blue rounded-corner accent, top-left of photo */}
        <div className="hidden md:block absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-[#49BBBD] rounded-tl-2xl z-10" />

        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src="/images/class-room.png"
            alt="Virtual classroom video call"
            fill
            className="object-cover"
          />
        </div>

        {/* green rounded-corner accent, bottom-right of photo */}
        <div className="hidden md:block absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-[#2FC79E] rounded-br-2xl z-10" />
      </div>
    </section>
  );
};

export default ClassroomShowcase;