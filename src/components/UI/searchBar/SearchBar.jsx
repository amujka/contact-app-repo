import React from "react";
import classes from "./SearchBar.module.scss";

const SearchBar = ({ findContact }) => {
  return (
    <div className={classes.Searchbar}>
      <input
        type="text"
        placeholder="&#xF002;"
        onChange={(e) => {
          findContact(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
