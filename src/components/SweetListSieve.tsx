import React from 'react';
import styled from 'styled-components';

const SweetListSieveForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SweetListSieveInput = styled.input`
  height: 30px;
  outline: none;
  font-size: 14px;
`

const SweetListSieveCheckbox = styled.input`
  transform: scale(1.5);
  margin-left: 10px;
`

export enum SortTypes {
  ASC = 'asc',
  DESC = 'desc'
}

interface SweetListSieveProps {
  sortBy: SortTypes;
  filterBy: string;
  changeSort: (changedSort: SortTypes) => void;
  changeTerm: (changedTerm: string) => void;
}

const SweetListSieve: React.FC<SweetListSieveProps> = ({changeSort, changeTerm, sortBy, filterBy }) => {
  const handleSortChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const changedSort = evt.target.checked ? SortTypes.ASC : SortTypes.DESC;
    changeSort(changedSort);
  }

  const isChecked = () => sortBy === SortTypes.ASC;

  const handleChangeTerm = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const changedTerm = evt.target.value;
    changeTerm(changedTerm);
  }
  
  return (
    <SweetListSieveForm>
      <label>
        Sort: 
        <SweetListSieveCheckbox
          type="checkbox"
          checked={isChecked()}
          onChange={handleSortChange} />
      </label>
      <label>
        <SweetListSieveInput type="text"
          value={filterBy}
          placeholder="Search"
          onChange={handleChangeTerm} />
      </label>
    </SweetListSieveForm>
  )
}

export default SweetListSieve;