import React from "react";
import classes from "./OtherLinks.module.css";
const OtherLinks = () => {
  return (
    <div className={classes.container}>
      <div className={classes.links}>
        <div className={classes.link}>Terms of Service</div>
        <div className={classes.link}>Privacy Policy</div>
        <div className={classes.link}>Cookie Policy</div>
        <div className={classes.link}>Accessibility</div>
        <div className={classes.link}>Ads info</div>
        <div className={classes.link}>More...</div>
      </div>
      <div className={classes.copyright}>
        <p>2022 Twitter, Inc.</p>
      </div>
    </div>
  );
};

export default OtherLinks;
