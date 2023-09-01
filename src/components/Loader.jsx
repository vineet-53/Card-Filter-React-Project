import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="flex flex-col  gap-3 justify-center h-screen w-full items-center">
      <div className="spinner"></div>
      <p className="text-white text-3xl">Loading ...</p>
    </div>
  );
};

export default Loader;
