import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actionTypes from './contacts/contacts-type';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACTS:
      return [...state, payload];
    case actionTypes.DELETE_CONTACTS:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// {
//     contacts: {
//         items: [],
//             filter: ''
//     }
// }
