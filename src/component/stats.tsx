import React from "react";

const stats = [
  { value: "15K+", label: "Students" },
  { value: "75%", label: "Total success" },
  { value: "35", label: "Main questions" },
  { value: "26", label: "Chief experts" },
  { value: "16", label: "Years of experience" },
];

const Stats = () => {
  return (
    <section className="text-center py-20 px-4">
      <h2 className="text-3xl font-bold text-[#252641] mb-4">Our Success</h2>
      <p className="max-w-xl mx-auto text-sm text-gray-500 mb-12">
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
        sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
        ultrices eu ornare tristique vel nisi orci.
      </p>
      <div className="flex flex-wrap justify-center gap-12 md:gap-20">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold text-[#49BBBD]">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;