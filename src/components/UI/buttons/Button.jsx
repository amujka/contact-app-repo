import React from "react";
import classes from "./Button.module.scss";
const Button = (props) => {
  return (
    <button className={classes[props.color]} onClick={props.onClickFunc}>
      {props.text}
    </button>
  );
};

export default Button;
