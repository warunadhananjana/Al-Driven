import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Feature from "./components/Feature";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Feature />
    </div>
  );
}

export default App;
