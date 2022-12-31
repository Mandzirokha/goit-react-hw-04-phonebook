import PropTypes from 'prop-types';
import { Button, Input } from './ContactForm.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export default function ContactForm({ onSetState, onRepeatedName }) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name can contain only letters, ', - and space. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
      )
      .required(),
    number: yup
      .string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number should contain only numbers and it also could contain spaces, dash, parenthesis and startts with +'
      )
      .required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };

  const addContact = ({ name, number }) => {
    if (onRepeatedName(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    onSetState(name, number);
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="name">
          <Field as={Input} type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label htmlFor="number">
          <Field as={Input} type="tel" name="number" placeholder="Number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSetState: PropTypes.func.isRequired,
  onRepeatedName: PropTypes.func.isRequired,
};
