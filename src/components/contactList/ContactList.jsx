import classes from "./ContactList.module.scss";
import { connect } from "react-redux";
import ContactListItem from "./contactListItem/ContactListItem";
import { NavLink } from "react-router-dom";
import SearchBar from "../UI/searchBar/SearchBar";
import { useState } from "react";
const ContactList = ({ contacts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const findContact = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className={classes.contactList}>
      <SearchBar contacts={contacts} findContact={findContact} />
      <div className={classes.contactListWrapper}>
        <div className={classes.addContact}>
          <NavLink to="/newContact">
            <i className="fas fa-plus "></i>
            <span>Add new</span>
          </NavLink>
        </div>
        {contacts
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
            return <ContactListItem key={contact.id} contact={contact} />;
          })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { contacts: state.contacts };
};

export default connect(mapStateToProps)(ContactList);
