import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Navbar_Right() {
  return (
    <div className="navbar__right">
      <a href="https://www.instagram.com/shrabon_ahamed/" target="_blank">
        <InstagramIcon />
      </a>
      <a href="https://twitter.com/?lang=en" target="_blank">
        <TwitterIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/md-abu-hurayra-64b47b1b3/"
        target="_blank"
      >
        <LinkedInIcon />
      </a>
      <a href="https://www.facebook.com/ShrabonAhamed610/" target="_blank">
        <FacebookIcon />
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <YouTubeIcon />
      </a>
    </div>
  );
}

export default Navbar_Right;
