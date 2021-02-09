import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./ContactListItem.module.scss";
import { deleteContactAction } from "../../../redux/actions/deleteContactAction";
import { connect } from "react-redux";
import { addContactToFav } from "../../../redux/actions/addContactToFav";
const ContactListItem = ({ contact, deleteContact, addContactToFav }) => {
  const [colors, setcolor] = useState("grey");
  const handleClick = () => {
    addContactToFav(contact.id);
    contact.isFavorite ? setcolor("red") : setcolor("grey");
  };
  useEffect(() => {
    console.log(contact.isFavorite);
    contact.isFavorite ? setcolor("red") : setcolor("grey");
  }, [contact.isFavorite]);
  return (
    <div className={classes.ContactListItem}>
      <NavLink to={"/" + contact.fullname}>
        <img src={contact.avatar} alt="" />
        <p>{contact.fullname}</p>
      </NavLink>
      <div className={classes.actionBtns}>
        <i
          className="far fa-heart"
          onClick={() => handleClick()}
          style={{ color: colors }}
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
    addContactToFav: (id) => {
      dispatch(addContactToFav(id));
    },
  };
};
export default connect(null, mapDispatchToProps)(ContactListItem);
