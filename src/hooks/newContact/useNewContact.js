//custom hook for adding new contact
import { useEffect, useState } from "react";
import { validateForm } from "./validateForm";
const useNewContact = (addNewContact) => {
  const [newContact, setNewContact] = useState({
    avatar: "",
    fullname: "",
    email: "",
    numbers: [{ label: "", number: "" }],
    isFavorite: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  //HANDLE INPUT-----------------------------------
  const handleInput = (e) => {
    let value =
      e.target.type === "file"
        ? URL.createObjectURL(e.target.files[0])
        : e.target.value;
    let name = e.target.name;
    setNewContact({
      ...newContact,
      [name]: value,
    });
  };
  //ADD MORE NUMBER INPUTS-----------------------------------
  const addNumInput = () => {
    let newNumInput = [...newContact.numbers, { label: "", number: "" }];
    setNewContact({ ...newContact, numbers: newNumInput });
  };
  //HANDLE NUMBERS INPUT--------------------------------
  const handleNumInput = (e, index) => {
    let { name, value } = e.target;
    let newNumbers = [...newContact.numbers];
    newNumbers[index][name] = value;
    setNewContact({ ...newContact, numbers: newNumbers });
  };
  //DELETE NUMBER INPUT--------------------------------
  const deleteNumInput = (index) => {
    let filteredNumbers = newContact.numbers.filter((_, i) => {
      return i !== index;
    });
    setNewContact({ ...newContact, numbers: filteredNumbers });
  };
  //HANDLE SUBMIT--------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(newContact));
    let id = Math.random().toString();
    setNewContact({ ...newContact, id });
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      addNewContact(newContact);
      setNewContact({
        avatar: "",
        fullname: "",
        email: "",
        numbers: [{ label: "", number: "" }],
        isFavorite: false,
      });
    }
  }, [errors]);

  return {
    newContact,
    errors,
    handleInput,
    addNumInput,
    handleNumInput,
    handleSubmit,
    deleteNumInput,
  };
};
export default useNewContact;
