import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import IconCheckbox from './IconCheckbox';
import { Flag, FlagTypes, flagIconsMap } from 'src/helpers';

const SweetListFlagsFilterForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const SweetListFlagsFilterLabel = styled.div`
  margin-right: 10px;
`

const IconCheckboxStyled = styled(IconCheckbox)`
  display: inline-flex;
  
  transform: scale(1.2);
  ${ props => {
    if (props.checked) {
      return css`
        color: red;
      `
    }
  }}
  &:not(:last-child) {
    margin-right: 15px;
  }
`

const SweetListFlagsFilter: React.FC = () => {
  const [filterByFlag, setFilterByFlag] = useState();

  const isChecked = (byFlag: Flag) => byFlag === filterByFlag;
  const handleFlagClick = (flag: FlagTypes) => {
    setFilterByFlag(flag);
  }

  return (
    <SweetListFlagsFilterForm>
      <SweetListFlagsFilterLabel>Filters:</SweetListFlagsFilterLabel>
      { Object.keys(flagIconsMap).map((key: string) => {
        const flag = +key as FlagTypes;
        const Icon = flagIconsMap[flag];
        return (
          <IconCheckboxStyled
            key={key}
            checked={isChecked(flag)}
            onChange={handleFlagClick.bind(null, flag)}>
            <Icon />
          </IconCheckboxStyled>
        )
      })}
      
    </SweetListFlagsFilterForm>
  )
}

export default SweetListFlagsFilter;