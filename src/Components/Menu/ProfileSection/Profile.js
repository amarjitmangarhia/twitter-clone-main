import React from "react";
import MyImage from "../../Assets/Img/myImg.jpg";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <img className={classes.profileIcon} src={MyImage} alt="profile-icon" />
      <div className={classes.info}>
        <div className={classes.name}>amarmangarhia</div>
        <div className={classes.username}>@amarmangarhia</div>
      </div>
    </div>
  );
};

export default Profile;
