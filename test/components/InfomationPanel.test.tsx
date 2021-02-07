import React from 'react';
import { AxiosResponse } from 'axios';
import * as CallApi from "../../src/utils/CallApi";
import { shallow } from 'enzyme';
import { InfomationPanel } from '../../src/components/InfomationPanel';

jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());

test('unitTest', done => {
  const props = {
    id: 'id1234',
    fetchOn: true,
  };

  const sendMessage = 'testMessage';
  const ret = {
    data: {
      message: sendMessage,
    }
  } as AxiosResponse;
  
  jest.spyOn(CallApi, 'CallApi')
    .mockImplementation(() => Promise.resolve(ret));
  const component = shallow(<InfomationPanel {...props} />);

  // not equal sendMessage
  const initMessage = component.text();
  expect(initMessage).not.toEqual(sendMessage);

  // wait for get data
  setImmediate(() => {
    component.update();
    const beforeMessage = component.text();
    // message is still not equal
    expect(initMessage).not.toEqual(beforeMessage);

    // button click
    props.fetchOn = true;

    setImmediate(() => {
      component.update();
      // get message
      const afterMessage = component.text();
      expect(afterMessage).toEqual(sendMessage);
      // end
      done();
    });
  });
});