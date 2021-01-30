import { DELETE_CONTACT } from "./actionTypes";
export const deleteContactAction = (contactId) => {
  return {
    type: DELETE_CONTACT,
    payload: contactId,
  };
};
