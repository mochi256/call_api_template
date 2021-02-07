import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../src/components/Button';

test('unitTest', () => {
  const label = 'testLabel';
  const onClick = jest.fn();

  const component = shallow(<Button label={label} onClick={onClick} />);

  expect(component.text()).toEqual(label);
  expect(onClick).toBeCalledTimes(0);
  
  // button click
  component.simulate('click');
  expect(onClick).toBeCalledTimes(1);
});