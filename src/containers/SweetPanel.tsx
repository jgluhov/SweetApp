import React from 'react';
import SweetList from '../components/SweetList';
import SweetDisplay from '../components/SweetDisplay';
import styled from 'styled-components';

const SweetPanelContainer = styled.div`
  width: 1000px;
  height: 600px;
  background-color: #f7f7f7;
`

export const SweetPanel: React.FC = () => {
  return (
    <SweetPanelContainer>
      <SweetList />
      <SweetDisplay />
      <SweetList />
    </SweetPanelContainer>
  );
}

export default SweetPanel;