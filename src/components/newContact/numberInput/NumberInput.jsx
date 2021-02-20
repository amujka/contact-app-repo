import React from "react";
import classes from "../NewContact.module.scss";
const NumberInput = ({
  handleNumInput,
  value,
  index,
  deleteNumInput,
  errors,
}) => {
  console.log({ errors });
  return (
    <li>
      <input
        type="text"
        name="label"
        placeholder="label"
        value={value.label}
        onChange={(e) => handleNumInput(e, index)}
        className={errors && errors[index] ? classes.error : null}
      />{" "}
      <div className={classes.deleteNumberWrapper}>
        <input
          type="number"
          name="number"
          placeholder="number"
          value={value.number}
          onChange={(e) => handleNumInput(e, index)}
          className={errors && errors[index] ? classes.error : null}
        />{" "}
        <button onClick={() => deleteNumInput(index)}>x</button>
      </div>
      {errors && <p className={classes.errorMsg}>{errors[index]}</p>}
    </li>
  );
};
export default NumberInput;
