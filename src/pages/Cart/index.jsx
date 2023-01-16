import React, { useState } from "react";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import BookTableComps from "../../components/BookTableComps";
import BookProgress from "../../components/BookProgress";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer";
import LayoutFrame from "../../Layout/LayoutFrame"

export default function Cart() {
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
    <div className="w-full pt-20 min-h-screen bg-gradient-to-b from-white to-red-200">
      <Layout>
        <div className="flex justify-center flex-col items-start">
          <HiArrowNarrowLeft
            className="text-4xl cursor-pointer absolute"
            onClick={handleBack}
          />
          <BookProgress pos={position} />
        </div>
      </Layout>
      <LayoutFrame>
        <BookTableComps position={position} setPosition={setPosition} />

      </LayoutFrame>
      <Footer />
    </div>
  );
}
