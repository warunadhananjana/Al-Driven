import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Feature from "./components/Feature";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import "./App.css";

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const element = document.getElementById(pathname.slice(1) || "home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <ScrollToTop />
        <div className="content-container">
          <section id="home">
            <Home />
          </section>
          <section id="features">
            <Feature />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="pricing">
            <Pricing />
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
