import React from "react";
import { FaThLarge, FaFolder, FaUsers } from "react-icons/fa";
import SplitRow from "./split-row";
import VideoCallMockup from "./video-call-mockup";
import QuizMockup from "./quiz-mockup";
import DiscussionMockup from "./discussion-mockup";

const uiPoints = [
  {
    icon: <FaThLarge className="text-[#5B4DFF]" />,
    bg: "bg-[#5B4DFF]/10",
    text: "Teachers don't get lost in the grid view and have a dedicated Podium space.",
  },
  {
    icon: <FaFolder className="text-[#F48C06]" />,
    bg: "bg-[#F48C06]/10",
    text: "TAs and presenters can be moved to the front of the class.",
  },
  {
    icon: <FaUsers className="text-[#5B4DFF]" />,
    bg: "bg-[#5B4DFF]/10",
    text: "Teachers can easily see all students and class data at one time.",
  },
];

const OurFeatures = () => {
  return (
    <section className="px-6 md:px-32 py-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold">
          Our <span className="text-[#49BBBD]">Features</span>
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>

      <SplitRow
        visual={
          <div className="relative inline-block isolate">
            {/* Green half-circle (dome shape) top-left */}
            <div className="absolute -top-7 -left-3 w-16 h-8 bg-[#2FC79E] rounded-t-full -z-10" />
            <span className="absolute -top-10 left-12 size-3 bg-[#38BDF8] rounded-full -z-10" />

            {/* Ring circle, positioned outside to the left */}
            <span className="absolute top-1/2 left-42 size-8 border-4 border-gray-200 rounded-full z-10" />

            {/* Small pink dot near Call button */}
            <span className="absolute -bottom-4 left-[80%] size-2.5 bg-[#F14C6D] rounded-full z-10" />

            {/* Blue circle bottom-right, tucked behind mockup */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#3B4FE0] rounded-full -z-10" />

            {/* Dashed vertical divider */}
            <div className="hidden md:block absolute top-0 -right-12 w-px h-full border-l border-dashed border-gray-300 -z-10" />

            <VideoCallMockup />
          </div>
        }
        reverse
      >
        <h3 className="text-xl font-bold mb-4">
          A <span className="text-[#49BBBD]">user interface</span> designed
          for the classroom
        </h3>
        <ul className="space-y-5">
          {uiPoints.map((point) => (
            <li key={point.text} className="flex gap-3 items-start">
              <span
                className={`${point.bg} rounded-full p-2 shrink-0 flex items-center justify-center`}
              >
                {point.icon}
              </span>
              <span className="text-sm text-gray-500 pt-1">{point.text}</span>
            </li>
          ))}
        </ul>
      </SplitRow>

      <SplitRow
        image="/images/tennage-student.png"
        imageAlt="Student using classroom tools"
      >
        <h3 className="text-xl font-bold mb-4">
          <span className="text-[#49BBBD]">Tools</span> For Teachers And
          Learners
        </h3>
        <p className="text-sm text-gray-500">
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can handout assignments in real-time
          for students to complete and submit.
        </p>
      </SplitRow>

      <SplitRow visual={<QuizMockup />} reverse>
        <h3 className="text-xl font-bold mb-4">
          Assessments, <span className="text-[#49BBBD]">Quizzes</span>, Tests
        </h3>
        <p className="text-sm text-gray-500">
          Easily launch live assignments, quizzes, and tests. Student
          results are automatically entered in the online gradebook.
        </p>
      </SplitRow>

      <SplitRow
        image="/images/grade-book.png"
        imageAlt="Gradebook with student scores"
      >
        <h3 className="text-xl font-bold mb-4">
          <span className="text-[#49BBBD]">Class Management</span> Tools for
          Educators
        </h3>
        <p className="text-sm text-gray-500">
          Class provides tools to help run and manage the class such as
          Class Roster, Attendance, and more. With the Gradebook, teachers
          can review and grade tests and quizzes in real-time.
        </p>
      </SplitRow>

      <SplitRow visual={<DiscussionMockup />} reverse>
        <h3 className="text-xl font-bold mb-4">
          One-on-One <span className="text-[#49BBBD]">Discussions</span>
        </h3>
        <p className="text-sm text-gray-500">
          Teachers and teacher assistants can talk with students privately
          without leaving the Zoom environment.
        </p>
      </SplitRow>
    </section>
  );
};

export default OurFeatures;