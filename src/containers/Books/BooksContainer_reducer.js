import { HOME_GETDATA } from './ActionTypes';
import { combineReducers } from 'redux';

const books = (state = [], action) => {
  switch (action.type) {
    case HOME_GETDATA:
      return [...action.payload];

    default:
      return state;
  }
};

export default combineReducers({ books });
