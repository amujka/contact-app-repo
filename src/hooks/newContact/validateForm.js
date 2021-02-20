export const validateForm = (newContact) => {
  let errors = {};
  errors.numbers = [];
  if (!newContact.fullname) {
    errors.fullname = "Name is required";
  } else if (newContact.fullname.length < 3) {
    errors.fullname = "Minimun 3 letters required";
  }
  if (!newContact.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(newContact.email)) {
    errors.email = "Email is incorrect";
  }
  newContact.numbers.map((item, index) => {
    if (item.label === "" || item.number === "") {
      errors.numbers[index] = "Input is required";
    }
    return errors.numbers;
  });

  if (
    errors.numbers.length === 0 &&
    errors.fullname === undefined &&
    errors.email === undefined
  ) {
    errors = {};
  }

  return errors;
};
