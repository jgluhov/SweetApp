import React, { useMemo } from 'react';
import styled from 'styled-components';

import { generateItems } from '../helpers';

import SweetList from '../components/SweetList';
import SweetDisplay from '../components/SweetDisplay';
import SweetListSieve from '../components/SweetListSieve';
import SweetListFlagsFilter from 'src/components/SweetListFlagsFilter';

const LIST_COUNT = 100;

const SweetPanelContainer = styled.div`
  width: 1000px;
  height: 600px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
`

export const SweetPanel: React.FC = () => {
  const leftItems = useMemo(() => generateItems(LIST_COUNT), []);
  const rightItems = useMemo(() => generateItems(LIST_COUNT), []);

  return (
    <SweetPanelContainer>
      <SweetList items={leftItems}>
        <SweetListSieve />
      </SweetList>
      <SweetDisplay />
      <SweetList items={rightItems}>
        <SweetListFlagsFilter />
      </SweetList>
    </SweetPanelContainer>
  );
}

export default SweetPanel;