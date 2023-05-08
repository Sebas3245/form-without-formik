export const validateForm = (formData) => {
  let errors = {};

  // Validation for "name" field
  if (!formData.name) {
    errors.name = "Name is required.";
  } else if (formData.name.length < 2 || formData.name.length > 50) {
    errors.name = "Name must be between 2 and 50 characters long.";
  } else if (!/^[a-zA-Z]+$/.test(formData.name)) {
    errors.name = "Name can only contain letters.";
  } else if (/^[<>\"'\\/%;()$&*+=|\[\]#@!?,.:_`´´´]+$/.test(formData.name)) {
    errors.name = "Name should not contain special characters.";
  }

  // Validation for "identification" field
  if (!formData.identification) {
    errors.identification = "Identification is required.";
  } else if (
    formData.identification.length < 6 ||
    formData.identification.length > 10
  ) {
    errors.identification =
      "Identification must be between 6 and 10 characters long.";
  } else if (
    /^[<>\"'\\/%;()$&*+=|\[\]#@!?,.:_`´´´]+$/.test(formData.identification)
  ) {
    errors.identification =
      "Identification should not contain special characters.";
  }

  // Validation for "phoneNumber" field
  if (!formData.phoneNumber) {
    errors.phoneNumber = "Phone number is required.";
  } else if (formData.phoneNumber.length !== 10) {
    errors.phoneNumber = "Phone number must be 10 digits long.";
  } else if (!/^[0-9]+$/.test(formData.phoneNumber)) {
    errors.phoneNumber = "Phone number should only contain digits.";
  }

  // Validation for "mail" field
  if (!formData.mail) {
    errors.mail = "Email is required.";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g.test(formData.mail)) {
    errors.mail = "Email format is not valid.";
  }

  // Validation for "username" field
  if (!formData.username) {
    errors.username = "Username is required.";
  } else if (formData.username.length < 4 || formData.username.length > 32) {
    errors.username = "Username must be between 4 and 32 characters long.";
  }

  // Validation for "password" field
  if (!formData.password) {
    errors.password = "Password is required.";
  } else if (formData.password.length < 8 || formData.password.length > 64) {
    errors.password = "Password must be between 8 and 64 characters long.";
  }

  // Validation for "confirmPassword" field
  if (!formData.confirmPassword) {
    errors.confirmPassword = "Confirm password is required.";
  } else if (formData.confirmPassword !== formData.password) {
    errors.confirmPassword = "Confirm password does not match the password.";
  }

  return errors;
};
