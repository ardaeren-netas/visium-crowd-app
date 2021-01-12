import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/dashboard";
import Navbar from "./components/Navbar/navbar";
import articleOfDay from "./components/Dashboard/articleOfDay";
function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
      {/* <Dashboard /> */}
    </>
  );
}

export default App;
