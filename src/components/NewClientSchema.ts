import * as Yup from "yup";

const NewClientSchema = Yup.object().shape({
  id: Yup.string().required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().required("Required"),
  height: Yup.number()
    .min(20, "Too Low!")
    .max(100, "Too High!")
    .required("Required"),
  isActive: Yup.boolean().required("Required"),
});

export default NewClientSchema;
