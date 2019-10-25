import React, { useState } from 'react';
import styled from 'styled-components';

import * as helpers from '../helpers';

import SweetList from '../components/SweetList';
import SweetDisplay from '../components/SweetDisplay';
import SweetListSieve, { SortTypes } from '../components/SweetListSieve';
import SweetListFlagsFilter from 'src/components/SweetListFlagsFilter';

const LIST_COUNT = 100;

const SweetPanelContainer = styled.div`
  width: 1000px;
  height: 600px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
`
const leftItemsState = helpers.generateItems(LIST_COUNT);
const rightItemsState = helpers.generateItems(LIST_COUNT);

export const SweetPanel: React.FC = () => {
  const [sortBy, setSortBy] = useState(SortTypes.DESC);
  const [filterBy, setFilterBy] = useState('');
  const [flagBy, setFilterByFlag] = useState();
  const [selectedItem, setSelectedItem] = useState();

  const [ leftItems, setLeftItems ] = useState(leftItemsState);
  const [ rightItems, setRightItems ] = useState(rightItemsState);

  const handleChangeSort = (changedSortBy: SortTypes) => {
    setSortBy(changedSortBy);
    
    const filteredByTerm = helpers.filterByTerm(rightItemsState, filterBy);
    const sortedItems = helpers.sortItems(filteredByTerm, changedSortBy);

    setLeftItems(sortedItems);
  }

  const handleChangeFlag = (changedFlag: helpers.Flag) => {
    setFilterByFlag(changedFlag);
    setRightItems(helpers.filterByFlag(rightItemsState, changedFlag));
  }

  const handleChangeFilter = (changedFilterBy: string) => {
    setFilterBy(changedFilterBy);

    const filteredByTerm = helpers.filterByTerm(rightItemsState, changedFilterBy);
    const sortedItems = helpers.sortItems(filteredByTerm, sortBy);

    setLeftItems(sortedItems);
  }

  const handleSelect = (item: helpers.Item) => {
    setSelectedItem(item);
  }

  return (
    <SweetPanelContainer>
      <SweetList items={leftItems} selectItem={handleSelect}>
        <SweetListSieve
          changeSort={handleChangeSort}
          changeTerm={handleChangeFilter}
          sortBy={sortBy}
          filterBy={filterBy} />
      </SweetList>
      <SweetDisplay item={selectedItem}/>
      <SweetList items={rightItems} selectItem={handleSelect}>
        <SweetListFlagsFilter
          flagBy={flagBy}
          changeFlagBy={handleChangeFlag} />
      </SweetList>
    </SweetPanelContainer>
  );
}

export default SweetPanel;