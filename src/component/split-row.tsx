import React from "react";
import Image from "next/image";

type SplitRowProps = {
  image?: string;
  imageAlt?: string;
  visual?: React.ReactNode;
  reverse?: boolean;
  children: React.ReactNode;
};

const SplitRow = ({ image, imageAlt, visual, reverse = false, children }: SplitRowProps) => {
  return (
    <div
      className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center py-8 md:py-12 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>{children}</div>
      <div className="flex items-center justify-center">
        {visual
          ? visual
          : image && (
              <div className="relative w-full h-52 sm:h-64 md:h-80">
                <Image src={image} alt={imageAlt ?? ""} fill className="object-contain" />
              </div>
            )}
      </div>
    </div>
  );
};

export default SplitRow;