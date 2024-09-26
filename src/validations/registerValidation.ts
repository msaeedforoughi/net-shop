import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string().required(
    "Password confirmation is required"
  ),
});
