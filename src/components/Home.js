import React from "react";
import About from "./About";
import Title from "./Title";
import Projects from "./Projects";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Title />
      <About style={{ float: "right" }} />
      <Projects />
      <Testimonials />
    </div>
  );
};

export default Home;
