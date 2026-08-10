import React from "react";
import SplitRow from "./split-row";
import VideoCallMockup from "./video-call-mockup";
import QuizMockup from "./quiz-mockup";
import DiscussionMockup from "./discussion-mockup";

const uiPoints = [
  "Teachers don't get lost in the grid view and have a dedicated Podium space.",
  "TAs and presenters can be moved to the front of the class.",
  "Teachers can easily see all students and class data at one time.",
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
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#2FC79E] rounded-tl-full rounded-tr-full rounded-bl-full -z-10" />
            <span className="absolute -top-2 left-6 size-2 bg-[#38BDF8] rounded-full -z-10" />
            <span className="absolute -bottom-2 -left-6 size-2 bg-[#F14C6D] rounded-full -z-10" />
            <span className="absolute bottom-8 -right-4 size-2 bg-[#F48C06] rounded-full -z-10" />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#3B82F6] rounded-full -z-10" />

            <VideoCallMockup />
          </div>
        }
        reverse
      >
        <h3 className="text-xl font-bold mb-4">
          A <span className="text-[#49BBBD]">user interface</span> designed
          for the classroom
        </h3>
        <ul className="space-y-4">
          {uiPoints.map((point) => (
            <li key={point} className="flex gap-3 text-sm text-gray-500">
              <span className="bg-[#49BBBD] rounded size-2 mt-1.5 shrink-0" />
              {point}
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