import React from "react";

// importing components
import Header from "./components/Header";
import About from "./components/About";
import SharedComponent from "./components/SharedComponent";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      {/* Start of Header */}
      <Header />
      {/* End of Header */}

      {/* Start of About */}
      <About />
      {/* End of About */}

      {/* Start of Portfolio */}
      <SharedComponent id="portfolio" />
      {/* End of Portfolio */}

      {/* Start of Skills */}
      <Skills />
      {/* End of Skills */}

      {/* Start of Portfolio */}
      <SharedComponent id="projects" />
      {/* End of Portfolio */}

      {/* Start of Contact */}
      <Contact />
      {/* End of Contact */}

      {/* Start of Footer */}
      <Footer />
      {/* End of Footer */}
    </>
  );
}
