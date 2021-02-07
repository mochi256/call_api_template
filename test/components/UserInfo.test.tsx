import React from 'react';
import { AxiosResponse } from 'axios';
import * as CallApi from "../../src/utils/CallApi";
import { shallow } from 'enzyme';
import { UserInfo } from '../../src/components/UserInfo';

jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());

test('unitTest', done => {
  const id = 'id1234';
  const name = 'testName';
  const ret = {
    data: {
      id,
      name,
    }
  } as AxiosResponse;

  jest.spyOn(CallApi, 'CallApi')
    .mockImplementation(() => Promise.resolve(ret));
  const component = shallow(<UserInfo id={id} />);

  // wait for get data
  setImmediate(() => {
    component.update();
    // get data
    const html = component.html();

    const idRegex = /ID:.([a-zA-Z0-9]+)/;
    const matchId = html.match(idRegex);
    expect(matchId?matchId[1]:'').toEqual(id);

    const nameRegex = /Name:.([a-zA-Z0-9]+)/;
    const matchNm = html.match(nameRegex);
    expect(matchNm?matchNm[1]:'').toEqual(name);

    done();
  });
});