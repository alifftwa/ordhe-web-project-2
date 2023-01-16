import React from "react";
import { dialCode } from "./dialCode";

export default function InputText({ id, title, type }) {
  if (type === "tel") {
    return (
      <div className="flex flex-col gap-2 text-[#979797] font-semibold my-8">
        <label htmlFor={id}>{title}</label>
        <div className="flex bg-white border border-black py-2 px-4 rounded-[15px]">
          <select
            name="dialCode"
            className="bg-transparent outline-none border-r-2 pr-2"
            id={id}
          >
            {dialCode.map((dial) => {
              return (
                <option value={dial.code} key={dial.name}>
                  {dial.dial_code}
                </option>
              );
            })}
          </select>
          <input
            required
            type={type}
            id={id}
            className="outline-none pl-2 bg-transparent w-full appearance-none"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2 text-[#979797] font-semibold my-8">
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        id={id}
        required
        className="outline-none py-2 px-4 border border-black rounded-[15px]"
      />
    </div>
  );
}
