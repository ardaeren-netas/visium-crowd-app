import React from "react";

const articleOfDay = () => {
  return (
    <div className="bg-red-700 grid-cols-2 shadow-lg rounded-xl p-10">
      <h1 className="text-white font-sans pb-3">Article of Day</h1>

      <h1 className=" text-3xl font-bold text-white col-span-2">
        How testing can Improve User expereince
      </h1>

      <a className="text-white text-right" href="#">
        Discover now
      </a>
    </div>
  );
};

export default articleOfDay;
