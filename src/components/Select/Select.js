import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
      <Wrapper>
          <NativeSelect value={value} onChange={onChange}>
              {children}
          </NativeSelect>
          <CustomSelect>
              {displayedValue}
              <IconWrapper style={{ '--size': 24 + 'px' }}>
                  <Icon id="chevron-down" size={24}/>
              </IconWrapper>
          </CustomSelect>
      </Wrapper>
  );
};

const Wrapper = styled.div`
    position: relative;
    width: max-content;
    isolation: isolate;
`;

const NativeSelect = styled.select`
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    appearance: none;
`

const CustomSelect = styled.div`
    font-size: 16px;
    color: ${COLORS.gray700}; 
    background-color: ${COLORS.transparentGray15};
    padding: 12px 52px 12px 16px;
    border-radius: 8px;
    
    ${NativeSelect}:focus + & {
        outline: 2px auto -webkit-focus-ring-color;
    }

    ${NativeSelect}:hover + & {
       color: ${COLORS.black}; 
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    right: 10px;   
    height: var(--size);
    width: var(--size);
    margin: auto;
`

export default Select;
