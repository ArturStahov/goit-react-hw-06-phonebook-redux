import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as action from './contacts-action';

const itemsReducer = createReducer([], {
  [action.addItem]: (state, { payload }) => [...state, payload],
  [action.deleteItem]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filterReducer = createReducer('', {
  [action.changeFilter]: (state, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
