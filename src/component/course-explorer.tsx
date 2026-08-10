import React from "react";
import CourseRow from "./course-row";

const pillSequence = [
  { label: "Ut Sed Eros", color: "bg-orange-500" },
  { label: "Curabitur Egestas", color: "bg-rose-400" },
  { label: "Quisque Consequat", color: "bg-amber-800" },
  { label: "Cras Convallis", color: "bg-orange-300" },
  { label: "Vestibulum Fauci...", color: "bg-purple-400" },
  { label: "Ut Sed Eros", color: "bg-sky-500" },
  { label: "Vestibulum Fauci...", color: "bg-teal-500" },
];

const CourseExplorer = () => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#F3F8FB]">
      <div className="w-full px-6 md:px-32 py-20 overflow-hidden">
        <CourseRow
          title="Lorem Ipsum"
          pillsBefore={pillSequence.slice(0, 7)}
          pillsAfter={[]}
          featured={{
            image: "/images/integer-id1.png",
            title: "Integer id Orc Sed Ante Tincidunt",
            text: "Cras convallis lacus orci, tristique magna fringilla at faucibus vel.",
            price: "$450",
          }}
        />

        <CourseRow
          title="Quisque a Consequat"
          pillsBefore={pillSequence.slice(0, 4)}
          pillsAfter={pillSequence.slice(4, 7)}
          featured={{
            image: "/images/integer-id2.png",
            title: "Integer id Orc Sed Ante Tincidunt",
            text: "Cras convallis lacus orci, tristique magna fringilla at faucibus vel.",
            price: "$450",
            ring: "ring-pink-400",
          }}
        />

        <CourseRow
          title="Aenean Facilisis"
          pillsBefore={pillSequence.slice(0, 1)}
          pillsAfter={pillSequence.slice(1, 7)}
          featured={{
            image: "/images/integer-id3.png",
            title: "Integer id Orc Sed Ante Tincidunt",
            text: "Cras convallis lacus orci, tristique magna fringilla at faucibus vel.",
            price: "$450",
            ring: "ring-sky-400",
          }}
        />
      </div>
    </section>
  );
};

export default CourseExplorer;