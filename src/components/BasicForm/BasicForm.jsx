import { Stack, TextField } from "@inube/design-system";
import { useFormValidation } from "../..//hooks/useFormValidation";
import { validations } from "./config/validations";

const initialState = {
  name: "",
  identification: "",
  phoneNumber: "",
  mail: "",
  username: "",
  password: "",
  confirmPassword: "",
};

export default function BasicForm() {
  const { formData, errors, handleChange, handleSubmit, handleBlur } =
    useFormValidation(initialState, validations);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact information</h1>
      <h2>Complete your information to register in Linix</h2>
      <Stack direction="column" alignItems="center" gap="10px">
        <TextField
          label="Name"
          type="text"
          id="name"
          name="name"
          placeholder="Type Name.."
          value={formData.name}
          handleChange={handleChange}
          size="compact"
          handleBlur={handleBlur}
          isFullWidth
          isRequired
          state={formData.name && errors.name ? "invalid" : undefined}
          errorMessage={errors.name}
        />
        <TextField
          label="Identification"
          type="number"
          id="identification"
          name="identification"
          placeholder="Type identification number"
          value={formData.identification}
          handleChange={handleChange}
          size="compact"
          handleBlur={handleBlur}
          isFullWidth
          isRequired
          state={
            formData.identification && errors.identification
              ? "invalid"
              : undefined
          }
          errorMessage={errors.identification}
        />
        <TextField
          label="Phone number"
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Type phone number only numbers.."
          value={formData.phoneNumber}
          handleChange={handleChange}
          size="compact"
          handleBlur={() => console.log("num")}
          isFullWidth
          state={
            formData.phoneNumber && errors.phoneNumber ? "invalid" : undefined
          }
          errorMessage={errors.phoneNumber}
        />
        <TextField
          label="Mail"
          type="email"
          id="mail"
          name="mail"
          placeholder="Type mail with format @domain.com.."
          value={formData.mail}
          handleChange={handleChange}
          size="compact"
          handleBlur={handleBlur}
          isFullWidth
          isRequired
          state={formData.mail && errors.mail ? "invalid" : undefined}
          errorMessage={errors.mail}
        />
        <TextField
          label="User name"
          type="text"
          id="username"
          name="username"
          placeholder="Type user name.."
          value={formData.username}
          handleChange={handleChange}
          size="compact"
          handleBlur={handleBlur}
          isFullWidth
          isRequired
          state={formData.username && errors.username ? "invalid" : undefined}
          errorMessage={errors.username}
        />
        <TextField
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Type password 8-64.."
          value={formData.password}
          handleChange={handleChange}
          size="compact"
          handleBlur={handleBlur}
          isFullWidth
          isRequired
          state={formData.password && errors.password ? "invalid" : undefined}
          errorMessage={errors.password}
        />
        <TextField
          label="Confirm password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Type confirm password.."
          value={formData.confirmPassword}
          handleChange={handleChange}
          size="compact"
          handleBlur={handleBlur}
          isFullWidth
          isRequired
          state={
            formData.confirmPassword && errors.confirmPassword
              ? "invalid"
              : undefined
          }
          errorMessage={errors.confirmPassword}
        />
      </Stack>
      <button type="submit">Send</button>
    </form>
  );
}
