import PropTypes from 'prop-types';
import { List, Li, Button } from './ContactList.styled';
import { AiFillDelete } from 'react-icons/ai';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <Li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <Button type="button" onClick={() => onDelete(id)}>
              <AiFillDelete />
            </Button>
          </Li>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
