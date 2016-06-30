import React from 'react';
import chai, { assert, expect } from 'chai';
import { shallow } from 'enzyme';
import spies from 'chai-spies';
import HelloWorld from './HelloWorld';

chai.use(spies);

describe('<HelloWorld />', () => {
  it('should render a DIV element with the text HelloWorld!', () => {
    const helloWorld = shallow(
      <HelloWorld />
    );

    expect(helloWorld.html()).to.equal('<div>HelloWorld!</div>');
  });

  it('should use the style given', () => {
    const style = { color: 'orange' };
    const helloWorld = shallow(
      <HelloWorld style={style} />
    );

    expect(helloWorld.prop('style').color).to.equal('orange');
  });
});
