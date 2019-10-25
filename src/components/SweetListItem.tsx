import React from 'react';
import { Item, flagIconsMap } from 'src/helpers';
import styled from 'styled-components';

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

const SweetListIconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: red;
`

const StyledIcon = styled.i`
  display: flex;
  :not(:last-child) {
    margin-right: 2px;
  }
`

type SweetListItemProps = { item: Item };

const SweetListItem: React.FC<SweetListItemProps> = ({ item }) => {
  return (
    <SweetListItemContainer>
      <SweetListItemContent>{ item.name }</SweetListItemContent>
      <SweetListIconsContainer>
        {item.flags.map((itemFlag, idx) => {
          const Icon = flagIconsMap[itemFlag];
          return <StyledIcon key={idx}><Icon /></StyledIcon>
        })}
      </SweetListIconsContainer>
    </SweetListItemContainer>
  )
}

export default SweetListItem;