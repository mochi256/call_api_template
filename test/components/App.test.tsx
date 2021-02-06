import React from 'react';
import { AxiosResponse } from 'axios';
import * as CallApi from "../../src/components/CallApi";
import { shallow } from 'enzyme';
import { App } from '../../src/components/App';

jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());

test('unitTest', done => {
  const id = 'id1234';
  const ret = {
    data: {
      message: 'testMessage',
    }
  } as AxiosResponse;

  jest.spyOn(CallApi, 'CallApi')
    .mockImplementation(() => Promise.resolve(ret));
  const component = shallow(<App id={id} />);

  setImmediate(() => {
    component.update();
    console.log(component.childAt(2).html());
    // WIP
    expect(1).toEqual(1);
    done();
  });
});