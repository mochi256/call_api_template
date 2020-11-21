import React from 'react';
import styled from 'styled-components';
import { CallApi } from "./CallApi";

export interface UserInfoProps {
  id: string,
}

export const UserInfo:React.FC<UserInfoProps> = (props) => {
  const { id } = props;
  const [data, setData] = React.useState({
    id: 'loading...',
    name: 'loading...'
  });
  React.useEffect(() => {
    CallApi({
      method: 'GET',
      path: '/api/v1/user/'+id
    })
    .then( res => res.json())
    .then((json) => { setData(json)})
  }, [UserInfo]);
  return (
      <Style>
        ID: { data['id'] }<br />
        Name: { data['name'] }
      </Style>
  );
};

const Style = styled('div')`
  width: 200px;
  margin: 5px;
  padding: 5px;
  margin-bottom: 15px;
  border: 2px solid black;
`;