import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../redux/contacts/contacts-action';
import { itemsArray } from './contactList-selector';
import { filterValue } from '../FilterContacts/filter-selector';

import {
  TaskList,
  TaskItem,
  TaskItemElements,
  Button,
} from './StyledComponents';

export default function ContactList() {
  const contactsArray = useSelector(itemsArray);
  const filter = useSelector(filterValue);
  const filterContacts = items => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  const arrFilters = filterContacts(contactsArray);

  const dispatch = useDispatch();

  return (
    <TaskList>
      {arrFilters.map(({ id, name, number }) => (
        <TaskItem key={id}>
          <TaskItemElements>{name} :</TaskItemElements>
          <TaskItemElements>{number}</TaskItemElements>
          <Button type="button" onClick={() => dispatch(deleteItem(id))}>
            Delete
          </Button>
        </TaskItem>
      ))}
    </TaskList>
  );
}

ContactList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};
