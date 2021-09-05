import React, { useState } from "react";

function Navbar_Middle() {
  const [className, setClassName] = useState(false);
  const clickBtn = () => {
    setClassName(!className);
  };
  return (
    <div className="navbar__middle">
      <p
        className={`navbar__middle__p1 ${
          className ? "navbar__middle__color" : ""
        }`}
        onClick={clickBtn}
      >
        Study
      </p>
      <p>Online Learning</p>
      <p>Accommodation</p>
      <p>Jobs</p>
    </div>
  );
}

export default Navbar_Middle;
