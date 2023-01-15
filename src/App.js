import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import BookTable from "./pages/BookTable";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="book-table" element={<BookTable />} />
      </Routes>
      {/* <Header /> */}
    </div>
  );
};

export default App;
