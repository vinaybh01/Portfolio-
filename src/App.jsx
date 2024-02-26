import React from "react";
import Navbar from "./Layouts/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">VINAY BH</h6>
      </footer>
    </div>
  );
}

export default App;
