import React, { useRef, useState } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

export default function CardPrice() {
  const priceCardRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClickPrice = (e) => {
    e.target.classList.toggle("rounded-b-[10px]");
    priceCardRef.current.classList.toggle("hidden");
    setOpen(!open);
  };
  return (
    <section className="card">
      <div
        onClick={handleClickPrice}
        className="mx-1 mt-4 rounded-t-[10px] bg-white py-3 px-4 cursor-pointer font-semibold flex justify-between items-center"
      >
        <h1 className="relative">Extra</h1>{" "}
        {open ? <SlArrowDown /> : <SlArrowUp />}
      </div>
      <div
        className="py-12 bg-extra-payment flex flex-col gap-4 rounded-b-[10px] transition-all ease-in-out duration-300 mx-1 px-[38px]"
        ref={priceCardRef}
      >
        <div className="flex justify-between items-center w-full">
          <span className="basis-3/6">Bonatical Gin</span>
          <span className="basis-1/6 text-right">2x</span>
          <span className="basis-2/6 text-right">Rp.29.000</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="basis-3/6">Sándwich Saludable</span>
          <span className="basis-1/6 text-right">2x</span>
          <span className="basis-2/6 text-right">Rp.29.000</span>
        </div>
      </div>
    </section>
  );
}
