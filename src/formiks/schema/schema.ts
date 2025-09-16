import * as yup from "yup";
const contactUsSchema = yup.object().shape({
  mailTo: yup.string().required(),
  email: yup
    .string()
    .required("Please input your email")
    .email("Invalid email format"),
  fullname: yup.string().required("Please input your name"),
  mobile: yup
    .string()
    .typeError("That doesn't look like a phone number")
    .min(8)
    .required("A phone number is required"),
  message: yup.string().required("Please input your message"),
});

const infoSchema = yup.object().shape({
  fullname: yup.string().required("Please input your name"),
  email: yup
    .string()
    .required("Please input your email")
    .email("Invalid email format"),
  mobile: yup.string().required("Please input your phone number"),
});

export { contactUsSchema, infoSchema };
