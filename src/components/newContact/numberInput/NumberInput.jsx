import React from "react";
import classes from "../NewContact.module.scss";
const NumberInput = ({
  handleNumInput,
  newContact,
  value,
  index,
  deleteNumInput,
}) => {
  return (
    <li>
      <input
        type="text"
        name="label"
        placeholder="label"
        value={value.label}
        onChange={(e) => handleNumInput(e, index)}
      />
      <div className={classes.deleteNumberWrapper}>
        <input
          type="number"
          name="number"
          placeholder="number"
          value={value.number}
          onChange={(e) => handleNumInput(e, index)}
        />
        <button onClick={() => deleteNumInput(index)}>x</button>
      </div>
    </li>
  );
};

export default NumberInput;
