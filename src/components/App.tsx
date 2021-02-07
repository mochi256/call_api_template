import React from 'react';
import { UserInfo } from './UserInfo';
import { Button } from './Button';
import { InfomationPanel } from './InfomationPanel';

export interface AppProps {
  id: string,
}

export const App:React.FC<AppProps> = (props) => {
  const { id } = props;
  const [fetchOn, setFetchOn] = React.useState(false);
  return (
      <>
        <UserInfo id={id} />
        <Button 
          label='show-user-info'
          onClick={()=>{setFetchOn(true)}}
        />
        <InfomationPanel
          id={id}
          fetchOn={fetchOn}
        />
      </>
  );
};
