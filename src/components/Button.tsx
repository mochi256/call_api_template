import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  title: string,
}

export const Button:React.FC<ButtonProps> = (props) => {
  const { title } = props;
  return (
    <Style>
      <input type={'button'} value={title} />
    </Style>
  );
};

const Style = styled('div')`
  margin: 5px;
  padding: 5px;
`;