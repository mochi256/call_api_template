import React from 'react';
import styled from 'styled-components';

export interface InfomationPanelProps {
  value: string,
}

export const InfomationPanel:React.FC<InfomationPanelProps> = (props) => {
  const { value } = props;
  return (
      <Style>
        { value }
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