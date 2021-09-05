import React from "react";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function Navbar_Left() {
  return (
    <div className="navbar__left">
      <div className="navbar__left__phone">
        <CallIcon />
        <p>+8801997260226</p>
      </div>
      <hr />
      <div className="navbar__left__mail">
        <MailOutlineIcon />
        <p>Shrabon610@gmail.com</p>
      </div>
    </div>
  );
}

export default Navbar_Left;
