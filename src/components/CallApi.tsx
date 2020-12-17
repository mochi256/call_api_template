const API_END_POINT = 'http://localhost:5000';

interface CallApiProps {
  method: string,
  path: string,
  body?: Object,
}

export const CallApi = async (props: CallApiProps):Promise<Response> => {
  const { method, path, body } = props;
  const url = `${API_END_POINT}${path}`;
  const headers = {
    // specify json for content-type violate 
    // the cors policy, use text
    'Content-Type': 'text/plain',
  };
  const data: RequestInit = {
    method: method,
    headers: headers,
  };
  if (['POST', 'PUT'].indexOf(method)){
    data.body = JSON.stringify(body);
  }
  return fetch(url, data);
};
