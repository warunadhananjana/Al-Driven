import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Feature from "./components/Feature";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Feature />
      <Testimonials />
      <Pricing />
    </div>
  );
}

export default App;
