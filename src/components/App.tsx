import React from 'react';
import { UserInfo } from './UserInfo';
import { Button } from './Button';
import { InfomationPanel } from './InfomationPanel';

export interface AppProps {
  id: string,
}

export const App:React.FC<AppProps> = (props) => {
  const { id } = props;
  return (
      <>
        <UserInfo 
          id={ id } 
          name={'test'} 
        />
        <Button title={'show-user-info'} />
        <InfomationPanel value={'test'} />
      </>
  );
};
