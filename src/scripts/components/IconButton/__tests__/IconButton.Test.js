import React, { Component } from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import IconButton from 'Components/IconButton';

describe('Button test', () => {

  const props = {
    className:'IconNode',
    icon: 'http://example.com/icon.svg',
    top: '10px',
    left: '10px',
    onClick: jest.fn()
  }

  const iconButton = shallow(<IconButton {...props} />);

  it('should exist ', () => {
    expect(iconButton.exists()).toBe(true);
  });

  it('Should be a structure', () => {    
    const tree = renderer.create(
      <IconButton {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
})