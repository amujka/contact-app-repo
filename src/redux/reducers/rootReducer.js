import {
  ADD_NEW_CONTACT,
  DELETE_CONTACT,
  ADD_CONTACT_TO_FAV,
} from "../actions/actionTypes";
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
      isFavorite: true,
    },
    {
      id: "2",
      avatar: avatar,
      fullname: "Goran Savic",
      email: "gogo@gmail.com",
      numbers: [
        { label: "home", number: "123456" },
        { label: "phone", number: "0991523215" },
        { label: "work", number: "09150225134" },
        { label: "job", number: "09151234" },
      ],
      isFavorite: false,
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

    case ADD_CONTACT_TO_FAV:
      let favorite = state.contacts.map((contact) => {
        if (contact.id === action.payload) {
          contact.isFavorite = !contact.isFavorite;
        }
        return contact;
      });
      return {
        ...state,
        contacts: favorite,
      };
    default:
      return state;
  }
};

export default rootReducer;
