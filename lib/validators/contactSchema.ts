import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().trim().min(2, "The name must contain at least 2 characters").required("Name is required"),
  email: yup.string().email("Incorrect email").required("Email is required."),
  message: yup.string().trim().min(10, "The message must contain at least 10 characters").required("The message cannot be empty."),
});