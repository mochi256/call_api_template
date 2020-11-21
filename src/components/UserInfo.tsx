import React from 'react';
import styled from 'styled-components';

export interface UserInfoProps {
  id: string,
  name: string,
}

export const UserInfo:React.FC<UserInfoProps> = (props) => {
  const { id, name } = props;
  return (
      <Style>
        ID: { id }<br />
        Name: { name }
      </Style>
  );
};

const Style = styled('div')`
  width: 100px;
  margin: 5px;
  padding: 5px;
  margin-bottom: 15px;
  border: 2px solid black;
`;