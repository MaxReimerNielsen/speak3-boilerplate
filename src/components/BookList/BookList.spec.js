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

    assert.equal(helloWorld.html(),
      '<ul class="list-group"><li class="list-group-item">' +
      '<h4 class="list-group-item-heading">Hello</h4>' +
      '<p class="list-group-item-text">World</p></li></ul>'
    );
  });
});
