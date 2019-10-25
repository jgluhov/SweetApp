import React from 'react';
import styled from 'styled-components';
import { Item } from 'src/helpers';
import ItemFlags from './ItemFlags';

const DisplayContainer = styled.div`
  width: 300px;
  height: 250px;
  background-color: #e6e6fa;
`

const DisplayHeader = styled.h1`
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
`
const DisplayContent = styled.div`
  display: flex;
  flex-direction: column;
`
const DisplayContentLine = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`

const DisplayContentLineLabel = styled.span`
  width: 80px;
  text-align: end;
  margin-right: 10px;
`

interface SweetDisplayProps {
  item?: Item;
}

const SweetDisplay: React.FC<SweetDisplayProps> = ({item}) => {
  return (
    <DisplayContainer>
      <DisplayHeader>info</DisplayHeader>
      <DisplayContent>
        { item && (
          <>
            <DisplayContentLine>
              <DisplayContentLineLabel>Name:</DisplayContentLineLabel>
              {item.name}
            </DisplayContentLine>
            <DisplayContentLine>
              <DisplayContentLineLabel>Flags:</DisplayContentLineLabel>
              <ItemFlags item={item} />
            </DisplayContentLine>
          </>
        )}
      </DisplayContent>
    </DisplayContainer>
  )
}

export default SweetDisplay;