import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Box, Container, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleState = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  isRepeatedName = name => {
    return this.state.contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());
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
            <ContactForm
              onSetState={this.handleState}
              onRepeatedName={this.isRepeatedName}
            />
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
