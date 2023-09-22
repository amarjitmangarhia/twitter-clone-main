import React from "react";
import classes from "./WhatsHappening.module.css";
import face from "../../Assets/Img/face.jpg";
const WhatsHappening = () => {
  return (
    <div className={classes.trending}>
      <div className={classes.htitle}>What's Happening</div>
      <div className={classes.detailAboutTrending}>
        <div className={classes.leftInfo}>
          <div className={classes.category}>Entertaining. LIVE</div>
          <div className={classes.title}>Fans celebrate Jr NTR'S birthday</div>
          <div className={classes.hashtags}>
            Trending With #NikhantZraeen #boxing
          </div>
        </div>
        <div className={classes.rightInfo}>
          <img className={classes.faceImage} src={face} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhatsHappening;
