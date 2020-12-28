import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../../redux/contacts/contacts-action';
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

const mapStateToProps = state => {
  return {
    visibleContacts: state.contacts.items.filter(item =>
      item.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
    ),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: id => dispatch(deleteItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};
