import React from "react";
import "./topbar.css";
import { NotificationsNone, Settings, Language } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Ratinadmin</span>
        </div>
        <div className="topRight">
          <div className="iconContainer">
            <Language className="icon" />
          </div>
          <div className="iconContainer">
            <NotificationsNone className="icon" />
            <span className="topIconBag">2</span>
          </div>
          <div className="iconContainer">
            <Settings className="icon" />
          </div>
          <img src="assets/img/user.png" alt="avater" className="avater"/>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
