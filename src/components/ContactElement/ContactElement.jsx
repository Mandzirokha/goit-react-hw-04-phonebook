import PropTypes from 'prop-types';
import { Item, Button } from './ContactElement.styled';
import { AiFillDelete } from 'react-icons/ai';

export const ContactElement = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <Item key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <Button type="button" onClick={() => onDelete(id)}>
        <AiFillDelete />
      </Button>
    </Item>
  );
};

ContactElement.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
