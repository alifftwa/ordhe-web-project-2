import React from "react";

export default function CreditCard({ creditData }) {
  return (
    <div className="rounded-[40px] bg-white drop-shadow-card pb-6 pt-16 px-8">
      <img src="/images/creditCard/chip.png" alt="Chip Card" />
      <h1 className="word-spacing-wide font-bold mt-4">{creditData.number}</h1>
      <div className="flex justify-start items-center gap-2 mt-2">
        <span className="flex-col flex ml-6 font-medium">
          <small>VALID</small>
          <small>THRU</small>
        </span>
        <h5 className="text-sm font-extrabold">{creditData.validDate}</h5>
      </div>
      <div className="flex items-end justify-between w-[300px]">
        <h3 className="text-sm font-semibold">{creditData.name}</h3>
        <img
          src={`/images/creditCard/${creditData.type}.png`}
          className="self-center pb-1"
          alt=""
        />
      </div>
    </div>
  );
}
