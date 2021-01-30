import { ADD_NEW_CONTACT, DELETE_CONTACT } from "../actions/actionTypes";
import avatar from "./avatar.jpg";
const initState = {
  contacts: [
    {
      id: "1",
      avatar: avatar,
      fullname: "Alen Mujkanovic",
      email: "amujka@gmail.com",
      numbers: [
        { label: "home", number: "2773258" },
        { label: "phone", number: "091525134" },
        { label: "work", number: "091502125134" },
        { label: "job", number: "09151234" },
      ],
    },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NEW_CONTACT:
      return { ...state, contacts: state.contacts.concat(action.payload) };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
