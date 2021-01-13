import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FilterBlock, Label, Title, Input } from './StyledComponents';
import { changeFilter } from '../../redux/contacts/contacts-action';
import { filterValue } from './filter-selector';

export default function FilterContacts() {
  const value = useSelector(filterValue);
  const dispatch = useDispatch();

  return (
    <FilterBlock>
      <Label>
        <Title>Find Contacts by name</Title>
        <Input
          type="text"
          value={value}
          onChange={event => dispatch(changeFilter(event.target.value))}
        />
      </Label>
    </FilterBlock>
  );
}

FilterContacts.propTypes = {
  OnInputFilter: PropTypes.func,
  value: PropTypes.string,
};
