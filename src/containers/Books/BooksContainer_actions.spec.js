import { expect } from 'chai';
import { HOME_GETDATA } from './ActionTypes';
import * as actions from './BooksContainer_actions';

describe('ActionTypes', () => {
  beforeEach(() => {
    /*
      TODO: Please re-investigate this.
      Ideas to consider:
        - Introducing Redux-Saga
        - Introducing polyfills for fetch and promise in Node and Internet Explorer
        - Introducing mocking of service
    */
    global.fetch = () => ({ then: () => 'HelloWorld' });
  });

  afterEach(() => {
    delete global.fetch;
  });

  it('should have a getData method', () => {
    expect(actions.getData).not.to.be.equal(undefined);
  });

  it('calling getData should return ActionType and given payload', () => {
    expect(actions.getData()).to.deep.equal({
      type: HOME_GETDATA,
      payload: 'HelloWorld',
    });
  });
});
