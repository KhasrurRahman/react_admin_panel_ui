import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../dummyData.js";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active user"/>
    </div>
  );
};

export default Dashboard;
