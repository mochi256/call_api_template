import React from 'react';
import styled from 'styled-components';
import { CallApi } from "./CallApi";

export interface InfomationPanelProps {
  id: string,
  fetchOn: boolean,
}

export const InfomationPanel:React.FC<InfomationPanelProps> = (props) => {
  const { id, fetchOn=false } = props;

  const [data, setData] = React.useState({
    message: 'loading...'
  });
  React.useEffect(() => {
    if (!fetchOn){
      return;
    }
      CallApi({
        method: 'GET',
        path: `/api/v1/info/${id}`,
      })
      .then((res) => {
          setData(res.data)
        });
  }, [data]);
  return (
      <Style>
        { data.message }
      </Style>
  );
};

const Style = styled('div')`
  margin: 5px;
  padding: 5px;
  border: 2px solid black;
  width: 320px;
  height: 200px;
`;