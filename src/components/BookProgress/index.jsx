import React from "react";
import ProgressItem from "./ProgressItem";

export default function BookProgress({ pos }) {
  return (
    <div className="self-center flex gap-4">
      <ProgressItem pos={pos} index={1} text="Details" />
      <ProgressItem pos={pos} index={2} text="Payment" />
      <ProgressItem pos={pos} index={3} text="Confirmation" />
    </div>
  );
}
