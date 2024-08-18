import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";

import toast from "react-hot-toast";
import { addContactThunk } from "../../redux/contacts/operations";

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters"),
  phone: Yup.string()
    .required("Phone number is required")
    .min(3, "Phone number must be at least 3 characters")
    .max(50, "Phone number must be at most 50 characters"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContactThunk({ name: values.username, number: values.phone }));
    toast.success('Successfully added!')
    resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.wrapper}>
        <div className={css.itemWrapper}>
          <span className={css.text}>Name:</span>
          <Field type="text" name="username" className={css.input} />
          <ErrorMessage name="username" component="div" className={css.error} />
        </div>
        <div className={css.itemWrapper}>
          <span className={css.text}>Phone number:</span>
          <Field type="text" name="phone" className={css.input} />
          <ErrorMessage name="phone" component="div" className={css.error} />
        </div>
        <button type="submit" className={css.btn}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
