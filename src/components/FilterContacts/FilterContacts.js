import PropTypes from 'prop-types';
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

export default FilterContacts;

FilterContacts.propTypes = {
  OnInputFilter: PropTypes.func,
  value: PropTypes.string,
};
