import React from "react";
import "./css/Bottom.css";
import SchoolIcon from "@material-ui/icons/School";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import EventNoteIcon from "@material-ui/icons/EventNote";
import NoteIcon from "@material-ui/icons/Note";
import TodayIcon from "@material-ui/icons/Today";

function Bottom() {
  return (
    <div className="bottom">
      <div className="bottom__explore">
        <SchoolIcon />
        <p>Explore University</p>
      </div>
      <div className="bottom__consult">
        <ContactPhoneIcon />
        <p>Free Conselling</p>
      </div>
      <div className="bottom__discuss">
        <AddIcCallIcon />
        <p>Discussions</p>
      </div>
      <div className="bottom__test">
        <EventNoteIcon />
        <p>English Test</p>
      </div>
      <div className="bottom__application">
        <NoteIcon />
        <p>Application</p>
      </div>
      <div className="bottom__event">
        <TodayIcon />
        <p>Event</p>
      </div>
    </div>
  );
}

export default Bottom;
