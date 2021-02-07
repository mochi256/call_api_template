import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  label: string,
  onClick: VoidFunction;
}

export const Button:React.FC<ButtonProps> = (props) => {
  const { label, onClick } = props;
  return (
    <Style type='button' onClick={onClick}>
      {label}
    </Style>
  );
};

const Style = styled('button')`
  margin: 5px;
  padding: 5px;
`;