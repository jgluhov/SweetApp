import React from 'react';
import { Item } from 'src/helpers';
import styled from 'styled-components';
import ItemFlags from './ItemFlags';

const SweetListItemContainer = styled.div`
  background-color: #d3f8a3;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 5px;
  cursor: pointer;
  :not(:last-child) {
    margin-bottom: 5px;
  }
`

const SweetListItemContent = styled.div`
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

type SweetListItemProps = {
  item: Item,
  selectItem: (item: Item) => void;
};

const SweetListItem: React.FC<SweetListItemProps> = ({ item, selectItem }) => {
  return (
    <SweetListItemContainer onClick={selectItem.bind(null, item)}>
      <SweetListItemContent>{ item.name }</SweetListItemContent>
      <ItemFlags item={item} />
    </SweetListItemContainer>
  )
}

export default SweetListItem;