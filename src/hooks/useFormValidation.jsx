import { useState } from "react";
import { usersData } from "../mock/data/usersData";

export const useFormValidation = (initialState, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    const isIdentificationExists = usersData.some((user) => user.identification === formData.mail);
    const isEmailExists = usersData.some((user) => user.email === formData.mail);
    const isUsernameExists = usersData.some((user) => user.username === formData.username);

    if (isIdentificationExists) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mail: "Identification already exists.",
      }));
    } 
    if (isEmailExists) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mail: "Email already exists.",
      }));
    } 
    if (isUsernameExists) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username already exists.",
      }));
    } 

    if (Object.keys(validationErrors).length === 0) {
        alert("Valid form. Send data to the server.", formData);
    } else {
      console.log("Formulario inválido. Por favor, revise los campos.");
    }
  };

  return { formData, errors, handleChange, handleSubmit };
};
