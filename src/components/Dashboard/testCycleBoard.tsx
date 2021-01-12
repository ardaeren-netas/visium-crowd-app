import React from "react";
import TestCycle from "./testCycle";
import TestCycleBoardMenu from "./testCycleBoard-menu";

const TestCycleBoard = () => {
  return (
    <div className="bg-white m-5 shadow-lg rounded-xl p-6 w-1/3">
      <div id="title-container" className="flex flex-row justify-between pb-3">
        <div className="font-sans text-gray-800 text-2xl font-bold self-center">
          Test Cycles
        </div>
        <div className="self-center">
          <TestCycleBoardMenu />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <TestCycle />
        <TestCycle />
        <TestCycle />
      </div>
      <div className="text-right font-sans text-gray-700 pt-4 text-xl">
        View more
      </div>
    </div>
  );
};

export default TestCycleBoard;
