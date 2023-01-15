import React from "react";
import { BsCheckLg } from "react-icons/bs";

export default function ProgressItem({ pos, index, text }) {
  const handleClasses = (position, i) => {
    if (position === i) {
      return "bg-[#4339F2] text-white";
    } else if (position > i) {
      return "bg-[#34B53A] text-white";
    } else {
      return "bg-white";
    }
  };
  return (
    <div className="items-center justify-center gap-4 flex">
      <span
        className={`${handleClasses(
          pos,
          index
        )} rounded-[20px] h-12 w-12 flex justify-center items-center text-3xl font-semibold`}
      >
        {pos > index ? <BsCheckLg className="text-xl" /> : index}
      </span>
      <span
        className={`${pos > index ? "text-[#34B53A] font-bold" : ""} text-2xl`}
      >
        {text}
        <span className="tracking-widest">{index !== 3 ? "----" : ""}</span>
      </span>
    </div>
  );
}
