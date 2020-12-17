import React from 'react';
import { UserInfo } from './UserInfo';
import { Button } from './Button';
import { InfomationPanel } from './InfomationPanel';
import { CallApi } from "./CallApi";

export interface AppProps {
  id: string,
}

export const App:React.FC<AppProps> = (props) => {
  const { id } = props;
  const [message, setMessage] = React.useState(
    'click "show-user-info" button'
  );
  const [infoData, setInfoData] = React.useState({
    message: 'loading...'
  });
  React.useEffect(() => {
      CallApi({
        method: 'GET',
        path: `/api/v1/info/${id}`,
      })
      .then( res => res.json())
      .then((json) => { setInfoData(json)});
  }, []);
  return (
      <>
        <UserInfo id={ id } />
        <span onClick={() => setMessage(infoData.message)} >
          <Button title='show-user-info' />
        </span>
        <InfomationPanel message={ message } />
      </>
  );
};
