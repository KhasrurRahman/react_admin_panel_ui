import React from "react";
import "./sidebar.css";
import { LineStyleOutlined,TimelineOutlined,TrendingUpOutlined } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarItem">
              <LineStyleOutlined />
              Home
            </li>
            <li className="sidebarItem">
              <TimelineOutlined />
              Analytics
            </li>
            <li className="sidebarItem">
              <TrendingUpOutlined />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
