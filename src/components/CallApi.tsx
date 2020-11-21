const API_END_POINT = 'http://localhost:5000';

interface CallApiProps {
  method: string,
  path: string,
  body?: Object,
}

export const CallApi = async (props: CallApiProps):Promise<Response> => {
  const { method, path, body } = props;
  const url = API_END_POINT + path;
  const headers = {
    // specify json for content-type violate 
    // the cors policy, use text
    'Content-Type': 'text/plain',
  };
  let res;
  if( ['GET', 'HEAD'].indexOf(method) == -1 ){
    res = await fetch(url, {
      method: method,
      headers: headers,
    });
  } else {
    res = await fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(body)
    });
  }
  return res;
};
