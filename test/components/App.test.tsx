import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../src/components/App';

jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());

test('unitTest', () => {
  const id = 'id1234';

  const component = shallow(<App id={id} />);
  // initial fetchOn state is "false"
  expect(component.childAt(2).props().fetchOn).toEqual(false);
  // button click
  component.childAt(1).simulate('click');

  // clicked  state is "true"
  expect(component.childAt(2).props().fetchOn).toEqual(true);
});