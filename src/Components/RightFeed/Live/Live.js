import React from "react";
import classes from "./Live.module.css";
import war from "../../Assets/Img/war.jpg";
const Live = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.left}>
          <div className={classes.title}>War in Ukraine | Live</div>
          <div className={classes.desc}>
            Ukrainian prosecutors are requesting a life sentence for first
            Russian soldier to face war crimes trial since invasion
          </div>
          <div className={classes.item}>Show More</div>
        </div>
        <div className={classes.right}>
          <img className={classes.image} src={war} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Live;
