import React from "react";
import Live from "./Live/Live";
import OtherLinks from "./OtherLinks/OtherLinks";
import "./RightFeed.module.css";
import classes from "./RightFeed.module.css";
import TrendingColumn from "./TrendingColumn/TrendingColumn";
import WhatsHappening from "./WhatsHappening/WhatsHappening";
import WhoToFollow from "./WhoToFollow/WhoToFollow";
const RightFeed = () => {
  return (
    <div className={classes.rightFeedContainer}>
      <WhatsHappening />
      <TrendingColumn
        title={"Sports"}
        topicName={"Rohit Sharma"}
        noOfTweets={300}
      />
      <TrendingColumn
        title={"Entertainment"}
        topicName={"Sharukh Khan"}
        noOfTweets={100}
      />
      <Live />
      <div style={{ position: "sticky", top: "10px" }}>
        <p style={{ marginTop: "45px", fontSize: "20px", fontWeight: "700" }}>
          Who To Follow
        </p>
        <WhoToFollow name={"Daniel"} userName={"@daniel"} />
        <WhoToFollow name={"Elad A. Fux"} userName={"@eladfux"} />{" "}
        <WhoToFollow name={"Elon Musk"} userName={"@elonmusk"} />
        <p
          style={{
            marginTop: "25px",
            fontSize: "15px",
            fontWeight: "700",
            color: "#1DA1F2",
          }}
        >
          Show More
        </p>
      </div>
      <OtherLinks />
    </div>
  );
};

export default RightFeed;
