import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./ContactListItem.module.scss";
import { deleteContactAction } from "../../../redux/actions/deleteContactAction";
import { connect } from "react-redux";
const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <div className={classes.ContactListItem}>
      <NavLink to={"/" + contact.fullname}>
        <img src={contact.avatar} alt="" />
        <p>{contact.fullname}</p>
      </NavLink>
      <div className={classes.actionBtns}>
        <i className="far fa-heart"></i>
        <i className="fas fa-edit"></i>
        <i
          className="fas fa-trash-alt"
          onClick={() => deleteContact(contact.id)}
        ></i>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => {
      dispatch(deleteContactAction(id));
    },
  };
};
export default connect(null, mapDispatchToProps)(ContactListItem);
