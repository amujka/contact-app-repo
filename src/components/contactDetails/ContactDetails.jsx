import React from "react";
import classes from "./ContactDetails.module.scss";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
const ContactDetails = ({ contact }) => {
  console.log({ contact });
  return (
    <div className={classes.ContactDetails}>
      <div className={classes.return}>
        <NavLink to={"/"}>
          <i className="fas fa-long-arrow-alt-left"> </i>
        </NavLink>
        <div className={classes.actionBtns}>
          <i className="far fa-heart"></i>
          <i className="fas fa-edit"></i>
        </div>
      </div>
      <div className={classes.outerInfoWrapper}>
        <div className={classes.headerInfo}>
          <img src={contact.avatar} alt="" />
          <div className={classes.name}>
            <h3>{contact.fullname}</h3>
          </div>
        </div>

        <div className={classes.innerInfoWrapper}>
          <div className={classes.emailWrapper}>
            <label htmlFor="">
              <i className="far fa-envelope"> </i> email
            </label>
            <p>{contact.email}</p>
          </div>
          <div className="numbersWrapper">
            <label htmlFor="">
              <i className="fas fa-mobile-alt"> </i> numbers
            </label>
            <ul className={classes.numbersList}>
              {contact.numbers.map((number) => {
                return (
                  <li key={number.number}>
                    <p className={classes.label}>{number.label}</p>
                    <p className={classes.number}>{number.number}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  let { fullname } = ownProps.match.params;
  return {
    contact: state.contacts.find((contact) => contact.fullname === fullname),
  };
};
export default connect(mapStateToProps)(ContactDetails);
