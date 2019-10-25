import React from 'react';
import { Item, flagIconsMap } from '../helpers';
import styled from 'styled-components';

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

interface ItemFlagsProps {
  item: Item;
  className?: string;
}

export const ItemFlags: React.FC<ItemFlagsProps> = ({item, className}) => {
  return (
    <SweetListIconsContainer className={className}>
      {item.flags.map((itemFlag, idx) => {
        const Icon = flagIconsMap[itemFlag];
        return <StyledIcon key={idx}><Icon /></StyledIcon>
      })}
    </SweetListIconsContainer>
  )
}

export default ItemFlags;