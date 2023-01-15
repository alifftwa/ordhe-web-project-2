import React from "react";
import { useNavigate } from "react-router-dom";

export default function CompletedSection() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-center items-center gap-4 py-12">
      <h1 className="text-4xl font-bold">Order Completed !</h1>
      <span className="w-1/4 font-thin text-center">
        We’ve sent a booking confirmation and an invoice to +6285876988734
      </span>
      <p className="font-semibold">Order Number #F1278</p>
      <img src="/images/bookCompleted/checkBookCompleted.png" alt="Check" />
      <button
        onClick={() => navigate("/")}
        className="w-1/2 py-8 text-white bg-[#DC2626] rounded-[15px]"
      >
        Home
      </button>
    </section>
  );
}
