import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-action';
import { FilterBlock, Label, Title, Input } from './StyledComponents';

function FilterContacts({ filterValue, contactsFilterInput }) {
  return (
    <FilterBlock>
      <Label>
        <Title>Find Contacts by name</Title>
        <Input
          type="text"
          value={filterValue}
          onChange={event => contactsFilterInput(event.target.value)}
        />
      </Label>
    </FilterBlock>
  );
}

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

FilterContacts.propTypes = {
  OnInputFilter: PropTypes.func,
  value: PropTypes.string,
};
