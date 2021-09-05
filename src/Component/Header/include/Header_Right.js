import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header_Right() {
  return (
    <div className="header__right">
      <div className="header__right__fav">
        <FavoriteBorderIcon />
        <span>0</span>
      </div>
      <div className="header__right__saf">
        <ShuffleIcon />
        <span>0</span>
      </div>
      <div className="header__right__avater">
        <AccountCircleIcon />
      </div>
      <div className="header__right__btn">Profile Evaluation</div>
    </div>
  );
}

export default Header_Right;
