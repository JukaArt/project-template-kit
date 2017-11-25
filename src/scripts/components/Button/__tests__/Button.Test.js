import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from 'Components/Button';

describe('Button test', () => {

  const props = {
    text: 'hello',
    width: '10px',
    height: '10px',
    type: 'submit',
    onClick: jest.fn()
  }

  const button = shallow(<Button {...props} />);

  it('should exist ', () => {
    expect(button.exists()).toBe(true);
  });

  it('Should be a structure', () => {
    const tree = renderer.create(
      <Button {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should show text ', () => {
    expect(button.text()).toEqual(text);
  });

})
