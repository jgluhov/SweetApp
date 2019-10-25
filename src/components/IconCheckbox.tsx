import React from 'react';
import styled from 'styled-components';

interface Props {
  label?: string;
  checked: boolean;
  className?: string;
  onChange: (evt: React.ChangeEvent) => void
}

interface DefaultProps {
  label: string;
}

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const defaultProps: DefaultProps = {
  label: ''
}

const IconCheckbox: React.FC<Props> = ({ label, children, className,  ...props }) => {
  return (
    <label className={className}>
      <CheckboxContainer>
        <HiddenCheckbox {...props} />
        <StyledCheckbox>
          {children}
        </StyledCheckbox>
      </CheckboxContainer>
      { label && <span>{label}</span> }
    </label>
  )
}

Object.assign(IconCheckbox, { defaultProps });

export default IconCheckbox;