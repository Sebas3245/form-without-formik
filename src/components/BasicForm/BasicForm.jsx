import { useFormValidation } from "../..//hooks/useFormValidation";
import { validateForm } from "./config/validations";

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
  const { formData, errors, handleChange, handleSubmit } = useFormValidation(
    initialState,
    validateForm
  );

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact information</h1>
      <h2>Complete your information to register in Linix</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Type Name.."
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="identification">Identification</label>
        <input
          type="text"
          id="identification"
          name="identification"
          placeholder="Type identification number"
          value={formData.identification}
          onChange={handleChange}
        />
        {errors.identification && <span>{errors.identification}</span>}
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Type phone number only numbers.."
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </div>
      <div>
        <label htmlFor="mail">Mail</label>
        <input
          type="email"
          id="mail"
          name="mail"
          placeholder="Type mail with format @domain.com.."
          value={formData.mail}
          onChange={handleChange}
        />
        {errors.mail && <span>{errors.mail}</span>}
      </div>
      <div>
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Type user name.."
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Type password 8-64.."
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Type confirm password.."
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
