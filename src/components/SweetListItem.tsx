import React from 'react';
import { Item } from 'src/helpers';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { MdBrightnessLow } from 'react-icons/md';
import { TiFlash } from 'react-icons/ti';

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
        <StyledIcon><FaHeart /></StyledIcon>
        <StyledIcon><FiSun /></StyledIcon>
        <StyledIcon><MdBrightnessLow /></StyledIcon>
        <StyledIcon><TiFlash /></StyledIcon>
      </SweetListIconsContainer>
    </SweetListItemContainer>
  )
}

export default SweetListItem;