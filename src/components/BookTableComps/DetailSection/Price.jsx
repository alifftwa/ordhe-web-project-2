import React from "react";

export default function Price() {
  return (
    <section className="bottom">
      <h1 className="text-3xl font-bold mb-4">Price Summary</h1>
      <div className="flex justify-between items-center">
        <span>Tables and offer :</span>
        <span className="font-semibold">Rp. 68.000</span>
      </div>
      <div className="flex justify-between items-center">
        <span>8% VAT :</span>
        <span className="font-semibold">Rp. 4.000</span>
      </div>
      <div className="flex justify-between items-center">
        <span>City Tax :</span>
        <span className="font-semibold">Rp. 6.800</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-[#34B53A] text-xl font-semibold">Total Price</h2>
        <span className="font-bold text-xl">Rp. 78.800</span>
      </div>
      <button
        type="submit"
        className="w-full bg-[#DC2626] py-3 text-white font-semibold mt-4 rounded-[10px]"
      >
        Next
      </button>
      <div className="text-bd-payment font-semibold text-center w-full mt-2">
        we run on{" "}
        <span className="text-card-payment text-black font-black">
          Ordhe Inc.
        </span>{" "}
      </div>
    </section>
  );
}
