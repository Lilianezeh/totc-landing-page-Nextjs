import React from "react";

type ComingSoonProps = {
  pageName: string;
};

const ComingSoon = ({ pageName }: ComingSoonProps) => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32 min-h-[60vh]">
      <h1 className="text-3xl md:text-4xl font-bold text-[#252641] mb-4">
        <span className="text-[#49BBBD]">{pageName}</span> page coming soon
      </h1>
      <p className="text-gray-500 max-w-md">
        We&apos;re working on this page. Check back soon, or head back to the
        homepage in the meantime.
      </p>
    </section>
  );
};

export default ComingSoon;