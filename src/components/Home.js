import React from "react";
import About from "./About";
import Title from "./Title";

const Home = () => {
  return (
    <div>
      <Title />
      <About style={{ float: "right" }} />
    </div>
  );
};

export default Home;
