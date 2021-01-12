import React from "react";

const articleOfDay = () => {
  return (
    <div className=" flex flex-col justify-start bg-red-700 shadow-lg m-5 rounded-xl p-6 w-64">
      <h1 className="text-white font-sans pb-3">Article of Day</h1>

      <h1 className=" text-3xl font-bold text-white">
        How testing can Improve User expereince
      </h1>

      <a className="justify-self-end text-white text-right pt-3" href="#">
        Discover now
      </a>
    </div>
  );
};

export default articleOfDay;
