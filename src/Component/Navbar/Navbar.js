import React from "react";
import "./css/Navbar.css";
import Navbar_Left from "./include/Navbar_Left";
import Navbar_Middle from "./include/Navbar_Middle";
import Navbar_Right from "./include/Navbar_Right";

function Navbar() {
  return (
    <div className="navbar">
      <Navbar_Left />
      <Navbar_Middle />
      <Navbar_Right />
    </div>
  );
}

export default Navbar;
