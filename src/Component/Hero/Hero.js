import React from "react";
import Bottom from "../Bottom/Bottom";
import Content from "../Content/Content";
import Header from "../Header/Header";
import LeftCircle from "../LeftCircle/LeftCircle";
import Navbar from "../Navbar/Navbar";
import "./css/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <Navbar />
      <Header />
      <Content />
      <Bottom />
      <LeftCircle />
    </div>
  );
}

export default Hero;
