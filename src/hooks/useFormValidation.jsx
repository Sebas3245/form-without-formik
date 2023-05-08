import { useState } from "react";

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

    if (Object.keys(validationErrors).length === 0) {
      // Realizar acciones adicionales como enviar los datos al servidor
      console.log("Formulario válido. Enviar datos al servidor:", formData);
    } else {
      console.log("Formulario inválido. Por favor, revise los campos.");
    }
  };

  return { formData, errors, handleChange, handleSubmit };
};
