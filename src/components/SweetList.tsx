import React from 'react';
import { Item } from 'src/helpers';
import SweetListItem from './SweetListItem';
import styled from 'styled-components';

type SweetListProps = { items: Item[] };

const SweetListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #7e9cd2;
`

const SweetListHeader = styled.div`
  min-height: 50px;
  padding: 16px;
`

const SweetListContent = styled.div`
  flex: 1;
  overflow: auto;
  padding: 16px;
`

const SweetList: React.FC<SweetListProps> = ({ items, children }) => {
  return (
    <SweetListContainer>
      <SweetListHeader>
       { children }
      </SweetListHeader>
      <SweetListContent>
        { items.map(item => <SweetListItem key={item.id} item={item} />) }
      </SweetListContent>
    </SweetListContainer>
  )
}

export default SweetList;