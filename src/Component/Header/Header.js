import React from "react";
import "./css/Header.css";
import Header_Left from "./include/Header_Left";
import Header_Middle from "./include/Header_Middle";
import Header_Right from "./include/Header_Right";

function Header() {
  return (
    <div className="header">
      <Header_Left />
      <Header_Middle />
      <Header_Right />
    </div>
  );
}

export default Header;
