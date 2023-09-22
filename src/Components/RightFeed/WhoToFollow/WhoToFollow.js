import React from "react";
import classes from "./WhoToFollow.module.css";
import icon from "../../Assets/Img/icon.jpg";
const WhoToFollow = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.userDetail}>
        <img className={classes.image} src={icon} alt="" />
        <div className="details">
          <div className={classes.name}>{props.name}</div>
          <div className={classes.userName}>{props.userName}</div>
          <div className={classes.promoted}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className={classes.svg}
              viewBox="0 0 16 16"
            >
              <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
            </svg>
            Promoted
          </div>
        </div>
      </div>

      <div className="content">
        <button className={classes.button}>Follow</button>
      </div>
    </div>
  );
};

export default WhoToFollow;
