import React, { useMemo } from 'react';
import SweetList from '../components/SweetList';
import SweetDisplay from '../components/SweetDisplay';
import styled from 'styled-components';
import { generateItems } from '../helpers';

const LIST_COUNT = 100;

const SweetPanelContainer = styled.div`
  width: 1000px;
  height: 600px;
  background-color: #f7f7f7;
`

export const SweetPanel: React.FC = () => {
  const leftItems = useMemo(() => generateItems(LIST_COUNT), []);
  const rightItems = useMemo(() => generateItems(LIST_COUNT), []);

  return (
    <SweetPanelContainer>
      <SweetList items={leftItems} />
      <SweetDisplay />
      <SweetList items={rightItems} />
    </SweetPanelContainer>
  );
}

export default SweetPanel;