import React from 'react';
import chai, { assert } from 'chai';
import { shallow } from 'enzyme';
import spies from 'chai-spies';
import BookList from './BookList';

chai.use(spies);

describe('<BookList />', () => {
  it('should render a list of given books', () => {
    const data = [
      { title: 'Hello', author: 'World' },
    ];
    const helloWorld = shallow(
      <BookList data={data} />
    );

    assert.equal(helloWorld.html(), '<ul><li>Hello by World</li></ul>');
  });
});
