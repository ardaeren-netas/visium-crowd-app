import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="flex flex-col justify-center bg-gradient-to-r to-red-300 via-pink-500 from-red-500">
        <div className="font-sans text-center text-3xl">1</div>
        <div>
          <h1>Test</h1>
        </div>
        <div className="transform-gpu hover:skew-y-12 font-sans text-center text-4xl py-5">
          This is a subtitle.
        </div>
      </div>
    </div>
  );
}

export default App;
