import PropTypes from 'prop-types';

import {
  TaskList,
  TaskItem,
  TaskItemElements,
  Button,
} from './StyledComponents';

function ContactList({ visibleContacts, onDeleteContact }) {
  return (
    <TaskList>
      {visibleContacts.map(({ id, name, number }) => (
        <TaskItem key={id}>
          <TaskItemElements>{name} :</TaskItemElements>
          <TaskItemElements>{number}</TaskItemElements>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </TaskItem>
      ))}
    </TaskList>
  );
}

export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};
