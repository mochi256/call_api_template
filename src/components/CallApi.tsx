import axios, { 
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';

const API_END_POINT = 'http://localhost:5000';

interface CallApiProps {
  method: 'GET'|'POST'|'DELETE'|'PUT',
  path: string,
  data?: Object,
}

export const CallApi = async (props: CallApiProps):Promise<AxiosResponse> => {
  const { method, path, data } = props;
  const url = `${API_END_POINT}${path}`;
  const headers = {
    // specify json for content-type violate 
    // the cors policy, use text
    'Content-Type': 'text/plain',
  };
  const config: AxiosRequestConfig = {
    method: method,
    headers: headers,
  };
  switch (method){
    case 'POST':
    case 'PUT':
      config.data = data;
      break;
    default:
  }
  return axios({
    method,
    url,
  });
};
