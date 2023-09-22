import React from "react";
import InputField from "./InputField/InputField";
import classes from "./MainSection.module.css";
import Tweet from "./Tweet/Tweet";
const MainSection = () => {
  return (
    <div className={classes.mainContainer}>
      <InputField />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
};

export default MainSection;
