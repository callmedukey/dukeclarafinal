import Image from "next/image";
import React from "react";

import LeavesOne from "@/public/leaves-1.svg";

const LeavesText = ({
  text,
  id,
  ref,
}: {
  text: string;
  id: string;
  ref?: React.RefObject<HTMLParagraphElement>;
}) => {
  return (
    <p
      id={id}
      ref={ref}
      className="relative isolate z-30 flex h-36 items-center justify-center font-gowunBatang text-4xl"
    >
      <Image
        src={LeavesOne}
        priority
        alt="Leaves"
        width={150}
        height={150}
        className="pointer-events-none -z-10"
      />
      <span className="absolute -translate-y-2 font-inter text-[2.25rem] text-[#555353]">
        {text}
      </span>
    </p>
  );
};

export default LeavesText;
