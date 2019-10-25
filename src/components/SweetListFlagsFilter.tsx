import React from 'react';
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

interface SweetListFlagsFilterProps {
  changeFlagBy: (flag: Flag) => void;
  flagBy: Flag;
}

const SweetListFlagsFilter: React.FC<SweetListFlagsFilterProps> = ({ flagBy, changeFlagBy }) => {
  

  const isChecked = (flag: Flag) => flag === flagBy;
  const handleFlagClick = (flag: FlagTypes) => {
    changeFlagBy(flag);
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