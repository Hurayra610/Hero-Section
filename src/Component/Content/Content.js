import React from "react";
import img1 from "./img/Capture.PNG";
import img2 from "./img/classroom.jpg";
import img3 from "./img/library.jpg";
import img4 from "./img/shrabon.jpg";
import "./css/Content.css";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import GrainIcon from "@material-ui/icons/Grain";
import AppsIcon from "@material-ui/icons/Apps";
import FilterListIcon from "@material-ui/icons/FilterList";
import { Button } from "@material-ui/core";

function Content() {
  return (
    <div className="content">
      <div className="content__header">
        <img src={img1} alt="picture" />
        <p>
          Apply to University Abroad with expert guidance from existing student
        </p>
      </div>
      <div className="content__inputBtnHolder">
        <div className="content__inputBtnHolder__input">
          <input
            className="content__inputBtnHolder__input__01"
            type="text"
            placeholder="Input your course, collage or exam"
          />
          <input type="text" placeholder="Location" />
        </div>
        <div className="content__inputBtnHolder__btn">
          <Button>
            <FilterListIcon />
          </Button>
          <Button>SEARCH</Button>
        </div>
      </div>
      <div className="content__img1">
        <img src={img2} alt="pic2" />
      </div>
      <div className="content__img2">
        <img src={img3} alt="pic3" />
      </div>
      <div className="content__img3">
        <img src={img4} alt="pic4" />
      </div>
      <div className="content__info">
        <p>Get insites into</p>
        <h4>Universities, Courses, Exams, Admissions, Student Visas</h4>
      </div>
      <div className="content__svg1">
        <FingerprintIcon />
      </div>
      <div className="content__svg_group">
        <div className="content__svg2">
          <GrainIcon />
          <GrainIcon />
          <GrainIcon />
          <GrainIcon />
        </div>
        <div className="content__svg2">
          <GrainIcon />
          <GrainIcon />
          <GrainIcon />
          <GrainIcon />
        </div>
        <div className="content__svg2">
          <GrainIcon />
          <GrainIcon />
          <GrainIcon />
          <GrainIcon />
        </div>
      </div>
      <div className="content__svg3">
        <div>
          <div>
            <AppsIcon />
            <AppsIcon />
          </div>
          <div className="m">
            <AppsIcon />
            <AppsIcon />
          </div>
          <div className="m">
            <AppsIcon />
            <AppsIcon />
          </div>
          <div className="m">
            <AppsIcon />
            <AppsIcon />
          </div>
        </div>
        <div>
          <div>
            <AppsIcon />
            <AppsIcon />
          </div>
          <div className="m">
            <AppsIcon />
            <AppsIcon />
          </div>
          <div className="m">
            <AppsIcon />
            <AppsIcon />
          </div>
          <div className="m">
            <AppsIcon />
            <AppsIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
