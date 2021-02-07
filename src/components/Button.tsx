import React from 'react';
import styled from 'styled-components';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  value: string,
}

export const Button:React.FC<ButtonProps> = (props) => {
  const { value } = props;
  return (
    <Style type='button' value={value} />
  );
};

const Style = styled('button')`
  margin: 5px;
  padding: 5px;
`;