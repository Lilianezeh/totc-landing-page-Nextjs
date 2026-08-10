import React from "react";
import Image from "next/image";

const cards = [
  {
    image: "/images/instructor.png",
    label: "FOR INSTRUCTORS",
    buttonText: "Start a class today",
  },
  {
    image: "/images/students.png",
    label: "FOR STUDENTS",
    buttonText: "Enter access code",
  },
];

const WhatIsTotc = () => {
  return (
    <section className="px-6 md:px-32 py-20 text-center">
      <h2 className="text-2xl font-bold mb-4">
        What is <span className="text-[#49BBBD]">TOTC</span>?
      </h2>
      <p className="max-w-2xl mx-auto text-sm text-gray-500 mb-12">
        TOTC is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage
        assignments, quizzes and exams; monitor due dates; grade results and
        provide students with feedback all in one place.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className="relative rounded-xl overflow-hidden h-64"
          >
            <Image
              src={card.image}
              alt={card.label}
              fill
              className="object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
              <p className="font-semibold tracking-wide">{card.label}</p>
              <button className="btn-ghost-totc">{card.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIsTotc;