import { ADD_NEW_CONTACT } from "./actionTypes";

export const addNewContactAction = (newContact) => {
  return {
    type: ADD_NEW_CONTACT,
    payload: newContact,
  };
};
