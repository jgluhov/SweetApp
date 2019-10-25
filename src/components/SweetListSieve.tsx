import React, { useState } from 'react';
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

const SweetListSieve: React.FC = () => {
  const [sort, setSort] = useState(SortTypes.ASC);
  const [term, setTerm] = useState('');

  const handleSortChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const changedSort = evt.target.checked ? SortTypes.ASC : SortTypes.DESC;
    setSort(changedSort);
  }

  const isChecked = () => sort === SortTypes.ASC;

  const handleChangeTerm = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(evt.target.value);
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
          value={term}
          placeholder="Search"
          onChange={handleChangeTerm} />
      </label>
    </SweetListSieveForm>
  )
}

export default SweetListSieve;