import React from "react";
import LayoutCard from "../../Layout/LayoutCard";
import CompletedSection from "./CompletedSection";
import DetailSection from "./DetailSection";
import PaymentSection from "./PaymentSection";

export default function BookTableComps({ position, setPosition }) {
  if (position === 1) {
    return (
      <LayoutCard pos={position}>
        <DetailSection setPos={setPosition} />
      </LayoutCard>
    );
  } else if (position === 2) {
    return (
      <LayoutCard pos={position}>
        <PaymentSection setPos={setPosition} />
      </LayoutCard>
    );
  } else if (position === 3) {
    return (
      <LayoutCard pos={position}>
        <CompletedSection />
      </LayoutCard>
    );
  }
}
