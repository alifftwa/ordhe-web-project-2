import React from "react";

export default function LayoutCard({ children }) {
  return (
    <div className="bg-card-payment w-full px-[64px] py-[50px] mt-12 rounded-[15px] mb-24">
      {children}
    </div>
  );
}
