import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Box, Container, Title } from './App.styled';

export class App extends Component {
  static defaultProps = {
    initialContacts: [],
  };

  state = {
    contacts: this.props.initialContacts,
    filter: '',
  };

  addContact = (name, number) => {
    const isNewName = this.state.contacts
      .map(contact => contact.name)
      .includes(name);
    isNewName
      ? alert(`${name} is already in contacts.`)
      : this.setState(prevState => ({
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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContact = this.filterContacts();
    return (
      <Box>
        <Container>
          <Container>
            <Title>PhoneBook</Title>
            <ContactForm onAddContact={this.addContact} />
          </Container>
          <Container>
            <Title>Contacts</Title>
            <Filter value={filter} onChange={this.handleChange} />
            <ContactList
              contacts={filteredContact}
              onDelete={this.deleteContact}
            />
          </Container>
        </Container>
      </Box>
    );
  }
}
