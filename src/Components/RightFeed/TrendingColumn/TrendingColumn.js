import React from "react";
import classes from "./TrendingColumn.module.css";
const TrendingColumn = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.trending}>
        <div className={classes.left}>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.topicName}>{props.topicName}</div>
          <div className={classes.noOfTweets}>{props.noOfTweets}K Tweets</div>
        </div>
        <div className="right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="rgb(112, 111, 111)"
            class="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrendingColumn;
