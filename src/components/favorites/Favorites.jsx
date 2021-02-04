import React from "react";
import { connect } from "react-redux";
import Navbar from "../navigation/Navbar";
import SearchBar from "../UI/searchBar/SearchBar";

const Favorites = ({ contacts }) => {
  console.log(contacts);
  return (
    <div>
      <Navbar />
      <SearchBar />
      <h1>Favorites</h1>
      {contacts.map((contact) => {
        return contact.isFavorite ? contact.fullname : null;
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};
export default connect(mapStateToProps)(Favorites);
