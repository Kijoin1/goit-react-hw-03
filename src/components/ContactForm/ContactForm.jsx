import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const ContactForm = ({ setContactsData }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, options) => {
    const newContact = { ...values, id: nanoid() };
    setContactsData((prevContacts) => [...prevContacts, newContact]);
    console.log(newContact);
    options.resetForm();
  };

  const validator = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Big!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Big!")
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validator}
      >
        {({ values }) => (
          <Form className={s.form}>
            <label>
              <span>Name:</span>
              <Field name="name" />
              <ErrorMessage name="name" component="p" className={s.error} />
            </label>
            <label>
              <span>Number:</span>
              <Field name="number" />
              <ErrorMessage name="number" component="p" className={s.error} />
            </label>
            <button disabled={!values.name || !values.number} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
