import React from "react";
import Navbar from "../Components/Navbar";
import Landing from "../Components/Landing";
import Marquee from "../Components/Marquee";
import About from "../Components/About";
import Eyes from "../Components/Eyes";
import Hobby from "../Components/Hobby";
import Stats from "../Components/Stats";
import Contact from "../Components/Contact";
import Surprise from "../Components/Surprise";
import Projects from "../Components/Projects.jsx";
import ScrollTop from "../Components/ScrollTop.tsx";

function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Marquee />
      <Stats />
      <About />
      <Eyes />
      <Hobby />
      <Projects />
      <Surprise />
      <Contact />
      <ScrollTop />
    </div>
  );
}

export default Home;
