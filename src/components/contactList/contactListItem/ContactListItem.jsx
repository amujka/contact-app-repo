import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./ContactListItem.module.scss";
import { deleteContactAction } from "../../../redux/actions/deleteContactAction";
import { connect } from "react-redux";
import { isFavoriteAction } from "../../../redux/actions/isFavoriteAction";
const ContactListItem = ({ contact, deleteContact, isFavorite }) => {
  return (
    <div className={classes.ContactListItem}>
      <NavLink to={"/" + contact.fullname}>
        <img src={contact.avatar} alt="" />
        <p>{contact.fullname}</p>
      </NavLink>
      <div className={classes.actionBtns}>
        <i
          className="far fa-heart"
          onClick={() => isFavorite(contact.id)}
          style={contact.isFavorite ? { color: "red" } : null}
        ></i>
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
    isFavorite: (id) => {
      dispatch(isFavoriteAction(id));
    },
  };
};
export default connect(null, mapDispatchToProps)(ContactListItem);
