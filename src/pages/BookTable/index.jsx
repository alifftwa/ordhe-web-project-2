import React, { useState } from "react";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import BookTableComps from "../../components/BookTableComps";
import BookProgress from "../../components/BookProgress";

export default function BookTable() {
  const [position, setPosition] = useState(1);
  const navigate = useNavigate();

  const handleBack = () => {
    if (position === 1) {
      navigate("/");
    } else {
      setPosition(position - 1);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <Layout>
        <div className="flex justify-center flex-col items-start">
          <HiArrowNarrowLeft
            className="text-4xl cursor-pointer"
            onClick={handleBack}
          />
          <BookProgress pos={position} />
        </div>
        <BookTableComps position={position} setPosition={setPosition} />
      </Layout>
    </div>
  );
}
