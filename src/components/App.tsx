import React from 'react';
import { Button } from './Button';


export interface AppProps {
  button_title: string,
}

export const App:React.FC<AppProps> = (props) => {
  const { button_title } = props;
  return (
      <Button title={button_title} />
  );
};
