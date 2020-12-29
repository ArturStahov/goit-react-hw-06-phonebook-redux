import { useState } from 'react';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import { Form, FormLabel, Button } from './StyledComponents';
import {
  errorBadValueNumber,
  errorContactPresent,
} from '../../Notification/ErrorNotification';

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

export default PhoneForm;
