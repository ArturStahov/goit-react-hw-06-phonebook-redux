import { connect } from 'react-redux';
import { deleteItem } from '../../redux/contacts/contacts-action';
import ContactList from './ContactList';

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
