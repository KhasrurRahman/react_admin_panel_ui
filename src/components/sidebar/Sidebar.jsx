import React from "react";
import "./sidebar.css";
import {
  LineStyleOutlined,
  TimelineOutlined,
  TrendingUpOutlined,
  PersonOutline,
  Redeem,
  Assessment,
  AttachMoney,
  Mail,
  DynamicFeed,
  Message,
  // Leaderboard,
} from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarItem active">
              <LineStyleOutlined className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarItem">
              <TimelineOutlined className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarItem">
              <TrendingUpOutlined className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarItem">
              <PersonOutline className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarItem">
              <Redeem className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarItem">
              <Assessment className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarItem">
              <Mail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarItem">
              <Message className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarItem">
              <DynamicFeed className="sidebarIcon" />
              Manages
            </li>
            <li className="sidebarItem">
              <Assessment className="sidebarIcon" />
              Reports
            </li>
            <li className="sidebarItem">
              <Leaderboard className="sidebarIcon" />
              Analitics
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
