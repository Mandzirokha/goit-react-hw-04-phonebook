import { Component } from 'react';
import { nanoid } from 'nanoid';

import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  static defaultProps = {
    initialContacts: [],
  };

  state = {
    contacts: this.props.initialContacts,
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h1>PhoneBook</h1>
        <AddContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </>
    );
  }
}

// class App extends Component {
//   state = {
//     contacts: [],
//     name: '',
//   };

//   handleChange = e => {
//     this.setState({ name: e.target.value });
//     // const { name, value } = e.target;
//     // this.setState({ [name]: value });
//   };

//   // Викликається під час відправлення форми
//   handleSubmit = e => {
//     e.preventDefault();
//     const { name } = e.target.elements;
//     this.addContact(name);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '' });
//   };

//   addContact = name => {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, { id: nanoid(), name }],
//     }));
//   };

//   render() {
//     const { name, contacts } = this.state;

//     return (
//       <>
//         <h2>Phonebook</h2>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name
//             <input
//               type="text"
//               placeholder="Enter name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>
//           <button type="submit">Add contact</button>
//         </form>
//         <div>
//           <h2>Contacts</h2>
//           <ul>
//             {contacts.map((contact, id) => {
//               return (
//                 <li key={id}>
//                   <p>{contact}</p>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </>
//     );
//   }
// }
