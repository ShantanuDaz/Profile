import React from "react";
import LandingPage from "./Components/landingPage";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <section>
        <div className="info glass">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;
