import uniqid from 'uniqid';
import { createAction } from '@reduxjs/toolkit';

export const addItem = createAction('contacts/add', (name, number) => {
  return {
    payload: {
      id: uniqid(),
      name,
      number,
    },
  };
});

export const deleteItem = createAction('contacts/delete');

export const changeFilter = createAction('filter/change');
