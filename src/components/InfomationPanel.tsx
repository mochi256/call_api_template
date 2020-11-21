import React from 'react';
import styled from 'styled-components';

export interface InfomationPanelProps {
  message: string,
}

export const InfomationPanel:React.FC<InfomationPanelProps> = (props) => {
  const { message } = props;
  return (
      <Style>
        { message }
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