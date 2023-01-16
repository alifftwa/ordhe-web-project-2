import React from "react";
import { BiLock } from "react-icons/bi";

export default function HeaderPayment() {
  let dataHeaderPayment = [
    {
      title: "Credit Card",
      active: true,
    },
    {
      title: "QRIS",
      active: false,
    },
    {
      title: "Cash",
      active: false,
    },
  ];

  return (
    <section className="w-full flex justify-between items-center border-b border-gray-400 py-8">
      <div className="flex gap-8 text-bd-payment self-end">
        {dataHeaderPayment.map(({ title, active }) => {
          return (
            <button
              key={title}
              className={`${
                active ? "border-b-2 border-bd-payment font-bold" : ""
              } text-xl`}
            >
              {title}
            </button>
          );
        })}
      </div>
      <div className="flex justify-end gap-3">
        <BiLock className="text-3xl" />
        <div className="flex flex-col mt-1 w-1/2">
          <h3 className="font-bold text-xl">Card is secure</h3>
          <p>Your data is protected, everything will be private</p>
        </div>
      </div>
    </section>
  );
}
