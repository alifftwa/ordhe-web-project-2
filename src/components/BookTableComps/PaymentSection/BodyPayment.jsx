import React from "react";
import CreditCard from "./CreditCard";
import InputForm from "./InputForm";

export default function BodyPayment({ setPos }) {
  const cardData = [
    {
      number: "5461 11562 0978 9898",
      validDate: "12/25",
      name: "JENNIFER JAMES WALKER",
      type: "mastercard",
    },
    {
      number: "5461 11562 4053 9898",
      validDate: "12/25",
      name: "DIAN SETIAWAN",
      type: "visa",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setPos(3);
  };
  return (
    <section className="py-28 flex gap-16 justify-between">
      <div className="flex flex-col gap-24">
        {cardData.map((item) => {
          return <CreditCard creditData={item} key={item.name} />;
        })}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-8">
        <InputForm
          type="text"
          label="Credit Card"
          placeholder="Card Number"
          creditType="mastercard"
        />
        <InputForm type="text" label="Name" placeholder="Name" />
        <div className="flex w-4/5">
          <InputForm
            type="expired"
            label="Expiration Date"
            placeholder="mm/yy"
          />
          <InputForm type="number" label="CVV" placeholder="xxx" />
        </div>
        <div className="flex gap-4 w-2/3 justify-between">
          <button
            type="submit"
            className="rounded-[10px] bg-[#DC2626] font-bold py-6 px-8 text-white w-full"
          >
            Confirm Payment
          </button>
          <button
            className="w-full text-center font-bold"
            onClick={() => {
              setPos(1);
            }}
          >
            Cancel and Return
          </button>
        </div>
      </form>
    </section>
  );
}
