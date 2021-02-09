import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ContactListItem from "../contactList/contactListItem/ContactListItem";
import Navbar from "../navigation/Navbar";
import SearchBar from "../UI/searchBar/SearchBar";
import classes from "../contactList/ContactList.module.scss";
const Favorites = ({ favorites }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const findContact = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className={classes.contactList}>
      <Navbar />
      <SearchBar findContact={findContact} />
      <div className={classes.contactListWrapper}>
        {favorites
          .filter((contact) => {
            if (searchTerm === "") {
              return contact;
            } else if (
              contact.fullname.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return contact;
            }
          })
          .map((contact) => {
            return contact.isFavorite ? (
              <ContactListItem key={contact.id} contact={contact} />
            ) : null;
          })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    favorites: state.contacts,
  };
};
export default connect(mapStateToProps)(Favorites);
