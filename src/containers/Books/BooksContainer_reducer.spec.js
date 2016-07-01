import { expect } from 'chai';
import { HOME_GETDATA } from './ActionTypes';
import reducer from './BooksContainer_reducer';

describe('BooksContainer reducer', () => {
  describe('when default state', () => {
    const initialState = reducer(undefined, {});

    it('which is an empty array', () => {
      expect(initialState).to.deep.equal([]);
    });
  });

  it('should handle HOME_GETDATA state', () => {
    const actionType = { type: HOME_GETDATA, payload: ['HelloWorld'] };
    const newState = reducer(undefined, actionType);

    expect(newState).to.deep.equal(actionType.payload);
  });
});
