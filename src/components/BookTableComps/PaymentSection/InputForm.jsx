import React from "react";

export default function InputForm({
  label,
  type,
  creditType,
  placeholder = "",
}) {
  const formatExpired = (e) => {
    let code = e.keyCode;
    let allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }

    e.target.value = e.target.value
      .replace(
        /^([1-9]\/|[2-9])$/g,
        "0$1/" // 3 > 03/
      )
      .replace(
        /^(0[1-9]|1[0-2])$/g,
        "$1/" // 11 > 11/
      )
      .replace(
        /^([0-1])([3-9])$/g,
        "0$1/$2" // 13 > 01/3
      )
      .replace(
        /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
        "$1/$2" // 141 > 01/41
      )
      .replace(
        /^([0]+)\/|[0]+$/g,
        "0" // 0/ > 0 and 00 > 0
      )
      .replace(
        /[^\d\/]|^[\/]*$/g,
        "" // To allow only digits and `/`
      )
      .replace(
        /\/\//g,
        "/" // Prevent entering more than 1 `/`
      );
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor="cc" className="text-2xl font-semibold">
        {label}
      </label>
      <div
        className={`flex px-4 bg-[#F2F2F2] justify-between items-center border-2 border-black rounded-[15px] py-2 w-4/5`}
      >
        <input
          type={type === "expired" ? "text" : type}
          placeholder={placeholder}
          className={`bg-transparent outline-none py-2 w-full`}
          onKeyUp={type === "expired" ? formatExpired : undefined}
        />
        {creditType ? (
          <img src={`/images/creditCard/${creditType}.png`} alt="Mastercard" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
