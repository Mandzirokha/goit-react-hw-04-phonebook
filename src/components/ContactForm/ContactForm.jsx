import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button, Input } from './ContactForm.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export class ContactForm extends Component {
  state = { name: '', number: '' };

  static propTypes = {
    onSetState: PropTypes.func.isRequired,
    onRepeatedName: PropTypes.func.isRequired,
  };

  schema = yup.object().shape({
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

  handleSubmit = (values, { resetForm }) => {
    this.addContact(values);
    resetForm();
  };

  addContact = ({ name, number }) => {
    if (this.props.onRepeatedName(name)) {
      alert(`${name} is already in contacts.`);
      this.setState({ name: '' });
      return;
    }
    this.props.onSetState(name, number);
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={this.handleSubmit}
        validationSchema={this.schema}
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
}
