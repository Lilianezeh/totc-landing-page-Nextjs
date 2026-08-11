// component/quiz-mockup.tsx
import React from "react";
import Image from "next/image";

const QuizMockup = () => {
  return (
    <div className="relative w-full max-w-sm h-80">
      <Image
        src="/images/true-or-false.png"
        alt="Quiz question: True or false, this play takes place in Italy"
        fill
        className="object-contain"
      />
    </div>
  );
};

export default QuizMockup;