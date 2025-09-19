import * as yup from "yup";
const contactUsSchema = yup.object().shape({
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
   lead_source: yup.string().notRequired(),
  web: yup.string().notRequired(),
  utm: yup.string().notRequired(),
  project_code: yup.string().notRequired(),
  project_name: yup.string().required("Please select cluster"),
  cluster_code: yup.string().notRequired(),
});


export { contactUsSchema };
