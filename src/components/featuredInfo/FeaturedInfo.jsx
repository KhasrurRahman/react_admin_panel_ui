import React from "react";
import "./featuredInfo.css";
import {ArrowDownward, ArrowUpward} from  "@material-ui/icons"

const FeaturedInfo = () => {
  return (
    <div className="feature">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3432</span>
          <span className="featuredMoneyrate">-66 <ArrowDownward/></span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
      
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3432</span>
          <span className="featuredMoneyrate">-38<ArrowDownward/></span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
      
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3432</span>
          <span className="featuredMoneyrate">+96 <ArrowUpward/></span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
