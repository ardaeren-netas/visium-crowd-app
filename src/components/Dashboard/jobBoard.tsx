import React from "react";
import Job from "./job";

const JobBoard = () => {
  return (
    <div className="bg-white m-5 shadow-lg rounded-xl p-6 w-1/3">
      <div className="font-sans text-gray-800 text-2xl font-bold pb-3">
        Job Board
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Job />
        <Job />
        <Job />
      </div>
      <div className="text-right font-sans text-gray-700 text-xl">
        View more
      </div>
    </div>
  );
};

export default JobBoard;
