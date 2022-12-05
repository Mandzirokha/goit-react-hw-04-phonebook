import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button, Form, Input } from './ContactForm.styled';

export class ContactForm extends Component {
  state = { name: '', number: '' };

  static propTypes = {
    onSetState: PropTypes.func.isRequired,
    onRepeatedName: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    this.addContact(name.value, number.value);
  };

  addContact = (name, number) => {
    if (this.props.onRepeatedName(name)) {
      alert(`${name} is already in contacts.`);
      this.setState({ name: '' });
      return;
    }
    this.props.onSetState(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <Input
          onChange={this.handleChange}
          value={name}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Input
          onChange={this.handleChange}
          value={number}
          type="tel"
          name="number"
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
