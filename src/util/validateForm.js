export const required = (fieldValue) => {
  return fieldValue.trim() !== "";
};

export const lengthBetween = (fieldValue, min, max) => {
  const valueLength = fieldValue.trim().length;
  return valueLength >= min && valueLength <= max;
};

export const regexValidation = (fieldValue, regex) => {
  return regex.test(fieldValue);
};

export const validateForm = (formData, fieldValidations) => {
  let errors = {};

  Object.entries(fieldValidations).forEach(([fieldName, validations]) => {
    const fieldValue = formData[fieldName];

    validations.forEach((validation) => {
      if (validation.validate && !validation.validate(fieldValue)) {
        errors[fieldName] = validation.errorMessage;
      }
      if (
        validation.customValidate &&
        !validation.customValidate(fieldValue, formData)
      ) {
        errors[fieldName] = validation.errorMessage;
      }
    });
  });

  return errors;
};
