import { useState } from 'react';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';
import { connect } from 'react-redux';
import { addItem } from '../../redux/contacts/contacts-action';
import { Form, FormLabel, Button } from './StyledComponents';

function PhoneForm({ AddContact, contacts }) {
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  const handlerInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'nameValue':
        setNameValue(value);
        break;
      case 'numberValue':
        setNumberValue(value);
        break;
      default:
        return;
    }
  };

  const handlerFormSubmit = e => {
    e.preventDefault();

    let isContactPresent = contacts.some(item =>
      item.name.toLowerCase().includes(nameValue.toLowerCase()),
    );

    if (isContactPresent) {
      errorContactPresent();
      return;
    }
    if (!isMobilePhone(numberValue)) {
      errorBadValueNumber();
      return;
    }

    AddContact(nameValue, numberValue);

    setNameValue('');
    setNumberValue('');
  };

  const errorBadValueNumber = () => {
    return error({
      title: 'Hi!',
      text:
        'BAD value phone-number!!! You must enter phone-number correct format',
      delay: 3000,
    });
  };
  const errorContactPresent = () => {
    return error({
      title: 'Hi!',
      text: 'This contact is present in phone-book!',
      delay: 3000,
    });
  };

  return (
    <Form onSubmit={handlerFormSubmit}>
      <FormLabel>
        Name:
        <input
          type="text"
          name="nameValue"
          onChange={handlerInput}
          value={nameValue}
          required
        />
      </FormLabel>
      <FormLabel>
        Phone:
        <input
          type="text"
          name="numberValue"
          onChange={handlerInput}
          value={numberValue}
          placeholder="+3(___)___-__-__"
          minLength="13"
          maxLength="13"
          required
        />
      </FormLabel>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AddContact: (name, number) => dispatch(addItem(name, number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneForm);
