import React from "react";
import { NavLink } from "react-router-dom";
import useNewContact from "../../hooks/newContact/useNewContact";
import Button from "../UI/buttons/Button";
import classes from "./NewContact.module.scss";
import NumberInput from "./numberInput/NumberInput";
import { addNewContactAction } from "../../redux/actions/addNewContactAction";
import { connect } from "react-redux";
const NewContact = ({ history, addNewContact }) => {
  const {
    newContact,
    handleInput,
    addNumInput,
    handleNumInput,
    handleSubmit,
    deleteNumInput,
  } = useNewContact(addNewContact);
  console.log(newContact);
  return (
    <div className={classes.NewContact}>
      <div className={classes.return}>
        <NavLink to={"/"}>
          <i className="fas fa-long-arrow-alt-left"> </i>
        </NavLink>
      </div>
      <div className={classes.inputWrapper}>
        <input type="file" name="avatar" onChange={(e) => handleInput(e)} />
      </div>
      <div className={classes.outerInputWrapper}>
        <div className={classes.inputWrapper}>
          <label>
            <i className="far fa-user"> </i> full name
          </label>
          <input
            type="text"
            value={newContact.fullname}
            name="fullname"
            placeholder="full name"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className={classes.inputWrapper}>
          <label htmlFor="">
            <i className="far fa-envelope"> </i> email
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => handleInput(e)}
            value={newContact.email}
          />
        </div>
        <div className={classes.inputWrapper}>
          <label htmlFor="">
            <i className="fas fa-mobile-alt"> </i> numbers
          </label>
          <ul>
            {newContact.numbers.map((item, i) => {
              return (
                <NumberInput
                  key={i}
                  index={i}
                  value={item}
                  newContact={newContact}
                  deleteNumInput={deleteNumInput}
                  handleNumInput={handleNumInput}
                />
              );
            })}
          </ul>
          <div className={classes.addNumInput}>
            <button onClick={addNumInput}> + </button> Add number
          </div>
        </div>
      </div>
      <div className={classes.btnWrapper}>
        <Button
          color={"isGray"}
          onClickFunc={() => history.replace("/")}
          text="Cancel"
        />
        <Button
          color={"isGreen"}
          onClickFunc={(e) => handleSubmit(e)}
          text="Add"
        />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewContact: (newContact) => {
      dispatch(addNewContactAction(newContact));
    },
  };
};
export default connect(null, mapDispatchToProps)(NewContact);
