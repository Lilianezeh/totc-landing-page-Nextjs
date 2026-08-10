import React from "react";
import Image from "next/image";

const DiscussionMockup = () => {
  return (
    <div className="relative w-full max-w-md h-72">
      <Image
        src="/images/end-of-discussion.png"
        alt="Private discussion between teacher and student"
        fill
        className="object-contain"
      />
    </div>
  );
};

export default DiscussionMockup;