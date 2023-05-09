import {
  lengthBetween,
  regexValidation,
  required,
} from "../../../util/validateForm";

export const validations = {
  name: [
    {
      validate: (value) => required(value),
      errorMessage: "Name is required.",
    },
    {
      validate: (value) => lengthBetween(value, 2, 50),
      errorMessage: "Name must be between 2 and 50 characters long.",
    },
    {
      validate: (value) => regexValidation(value, /^[a-zA-Z\s]+$/),
      errorMessage: "Name can only contain letters and spaces.",
    },
    {
      validate: (value) =>
        regexValidation(value, /^[^<>\"'\\/%;()$&*+=|\[\]#@!?,.:_`´´´]+$/),
      errorMessage: "Name should not contain special characters.",
    },
  ],
  identification: [
    {
      validate: (value) => required(value),
      errorMessage: "Identification is required.",
    },
    {
      validate: (value) => lengthBetween(value, 6, 10),
      errorMessage: "Identification must be between 6 and 10 characters long.",
    },
    {
      validate: (value) =>
        regexValidation(value, /^[^<>\"'\\/%;()$&*+=|\[\]#@!?,.:_`´´´]+$/),
      errorMessage: "Identification should not contain special characters.",
    },
  ],
  phoneNumber: [
    {
      validate: (value) => required(value),
      errorMessage: "Phone number is required.",
    },
    {
      validate: (value) => lengthBetween(value, 10, 10),
      errorMessage: "Phone number must be 10 digits long.",
    },
    {
      validate: (value) => regexValidation(value, /^[0-9]+$/),
      errorMessage: "Phone number should only contain digits.",
    },
  ],
  mail: [
    {
      validate: (value) => required(value),
      errorMessage: "Email is required.",
    },
    {
      validate: (value) =>
        regexValidation(value, /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g),
      errorMessage: "Email format is not valid.",
    },
  ],
  username: [
    {
      validate: (value) => required(value),
      errorMessage: "Username is required.",
    },
    {
      validate: (value) => lengthBetween(value, 4, 32),
      errorMessage: "Username must be between 4 and 32 characters long.",
    },
  ],
  password: [
    {
      validate: (value) => lengthBetween(value, 8, 64),
      errorMessage: "Password must be between 8 and 64 characters long.",
    },
  ],
  confirmPassword: [
    {
      validate: (value) => required(value),
      errorMessage: "Confirm password is required.",
    },
    {
      customValidate: (value, formData) => value === formData?.password,
      errorMessage: "Confirm password does not match the password.",
    },
  ],
};
