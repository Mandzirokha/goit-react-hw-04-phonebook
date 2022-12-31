import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Box, Container, Title } from './App.styled';
import useLocalStorage from 'hooks/useLocalStorage';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleState = (name, number) => {
    setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
  };

  const isRepeatedName = name => {
    return contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContact = filterContacts();

  return (
    <Box>
      <Container>
        <Container>
          <Title>PhoneBook</Title>
          <ContactForm
            onSetState={handleState}
            onRepeatedName={isRepeatedName}
          />
        </Container>
        <Container>
          <Title>Contacts</Title>
          <Filter value={filter} onChange={handleChange} />
          <ContactList contacts={filteredContact} onDelete={deleteContact} />
        </Container>
      </Container>
    </Box>
  );
}
