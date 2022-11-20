import React from "react";
import Club from "./club/club";
import Herosection from "./components/Hero/hero";
import Navbar from "./components/navbar/Navbar";
import Service from './components/service/service'
const Landing = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <Service/>
      <Club/>
    </>
  );
};

export default Landing;
