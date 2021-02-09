import { ADD_CONTACT_TO_FAV } from "./actionTypes";
export const addContactToFav = (id) => {
  return {
    type: ADD_CONTACT_TO_FAV,
    payload: id,
  };
};
