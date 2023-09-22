import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <div className={classes.button}>
      <div
        style={{ width: props.width, height: props.height }}
        className={classes.style}
      >
        {props.name}
      </div>
    </div>
  );
};

export default Button;
