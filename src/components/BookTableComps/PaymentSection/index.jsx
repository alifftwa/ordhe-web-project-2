import React from "react";
import BodyPayment from "./BodyPayment";
import HeaderPayment from "./HeaderPayment";

export default function PaymentSection({ setPos }) {
  return (
    <div className="py-8 px-4">
      <h1 className="text-4xl font-semibold">Payment Details</h1>
      <HeaderPayment />
      <BodyPayment setPos={setPos} />
    </div>
  );
}
