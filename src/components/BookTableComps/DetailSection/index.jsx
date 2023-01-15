import React from "react";
import CardPrice from "./CardPrice";
import InputText from "./InputText";
import Price from "./Price";

export default function DetailSection({ setPos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setPos(2);
  };
  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex justify-between gap-[100px]"
      >
        <div className="border border-bd-payment w-full h-[650px] rounded-[15px] p-[45px]">
          <h1 className="text-4xl font-bold mb-4">Enter Your Details</h1>
          <p className="font-thin w-[400px] text-[#979797]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
          <InputText id="firstName" title="FIRST NAME *" type="text" />
          <InputText id="lastName" title="LAST NAME *" type="text" />
          <InputText id="email" title="EMAIL ADDRESS *" type="email" />
          <InputText id="phone" title="PHONE NUMBER *" type="tel" />
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="border border-bd-payment flex flex-col justify-between rounded-[15px] p-[45px] min-h-[650px]">
            <CardPrice />
            <Price setPos={setPos} />
          </div>
        </div>
      </form>
    </section>
  );
}
