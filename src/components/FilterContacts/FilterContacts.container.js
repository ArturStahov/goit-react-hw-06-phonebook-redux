import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-action';
import FilterContacts from './FilterContacts';

const mapStateToProps = state => {
  return {
    filterValue: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    contactsFilterInput: value => dispatch(changeFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);
