import { expect } from 'chai';
import * as actionTypes from './ActionTypes';

describe('ActionTypes', () => {
  it('should have a const HOME_GETDATA', () => {
    expect(actionTypes.HOME_GETDATA).not.to.be.equal(undefined);
  });
});
