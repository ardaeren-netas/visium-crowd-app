import React from "react";

const TestCycleBoardMenu = () => {
  return (
    <div>
      <div className="flex flex-row space-x-8">
        <a
          href=""
          className=" text-gray-800 font-sans font-normal active:text-red-700 "
        >
          Active
        </a>
        <a href="#" className="text-gray-800 font-sans font-normal">
          Applied
        </a>
        <a href="#" className="text-gray-800 font-sans font-normal">
          Rejected
        </a>
        <a href="#" className="text-gray-800 font-sans font-normal">
          Invited
        </a>
        <a href="#" className="text-gray-800 font-sans font-normal">
          Completed
        </a>
      </div>
      <hr className="border-solid border-gray-200 border-t-4 mt-2"></hr>
    </div>
  );
};

export default TestCycleBoardMenu;

// active
// applied
// rejected
// invited
// Completed
