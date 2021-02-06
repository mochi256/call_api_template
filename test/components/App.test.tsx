import React from 'react';
import { AxiosResponse } from 'axios';
import * as CallApi from "../../src/components/CallApi";
import { shallow } from 'enzyme';
import { App } from '../../src/components/App';

jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());

test('unitTest', done => {
  const id = 'id1234';
  const sendMessage = 'testMessage';
  const ret = {
    data: {
      message: sendMessage,
    }
  } as AxiosResponse;

  jest.spyOn(CallApi, 'CallApi')
    .mockImplementation(() => Promise.resolve(ret));
  const component = shallow(<App id={id} />);

  // wait for get data
  setImmediate(() => {
    component.update();
    // button click
    component.childAt(1).simulate('click');
    // get message
    const rcvMessage = component.childAt(2).dive().childAt(0).text();
    expect(rcvMessage).toEqual(sendMessage);
    done();
  });
});