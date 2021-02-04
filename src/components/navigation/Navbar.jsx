import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <div>
        <NavLink to="/" exact activeClassName={classes.active}>
          All contacts
        </NavLink>
      </div>
      <span>|</span>
      <div>
        <NavLink to="/favorites" activeClassName={classes.active}>
          Favorites
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
