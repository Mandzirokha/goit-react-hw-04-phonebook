import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  static defaultProps = {
    initialContacts: [],
  };

  state = {
    contacts: this.props.initialContacts,
    filter: '',
  };

  addContact = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContact = this.filterContacts();
    return (
      <>
        <h1>PhoneBook</h1>
        <AddContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChange} />
        <ContactList contacts={filteredContact} />
      </>
    );
  }
}
