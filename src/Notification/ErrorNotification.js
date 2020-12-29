import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

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

export { errorBadValueNumber, errorContactPresent };
