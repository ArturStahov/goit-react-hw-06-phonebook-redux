import actionType from './contacts-type';
import uniqid from 'uniqid';

export const addItem = (name, number) => {
  return {
    type: actionType.ADD_CONTACTS,
    payload: {
      id: uniqid(),
      name,
      number,
    },
  };
};
export const deleteItem = id => {
  return {
    type: actionType.DELETE_CONTACTS,
    payload: id,
  };
};
export const changeFilter = text => {
  return {
    type: actionType.CHANGE_FILTER,
    payload: text,
  };
};
