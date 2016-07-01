import { HOME_GETDATA } from './ActionTypes';

const books = (state = [], action) => {
  switch (action.type) {
    case HOME_GETDATA:
      return [...action.payload];

    default:
      return state;
  }
};

export default books;
