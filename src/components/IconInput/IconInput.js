import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizeStyles = {
    small: {
        fontSize: '14',
        iconSize: '16',
        leftPadding: '24',
        borderWidth: '1',
    },
    large: {
        fontSize: '18',
        iconSize: '24',
        leftPadding: '28',
        borderWidth: '2',
    }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
    const sizeStyle = sizeStyles[size];

    return (
        <Wrapper style={{
            '--width': width + 'px',
            '--font-size': sizeStyle.fontSize + 'px',
            '--border-width': sizeStyle.borderWidth + 'px'
        }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            <UJIcon id={icon} size={sizeStyle.iconSize}/>
            <InputText type="text" placeholder={placeholder} style={{'--left-padding': sizeStyle.leftPadding + 'px'}}/>
        </Wrapper>
  );
};

const Wrapper = styled.label`
    position: relative;
    display: block;
    width: var(--width);
    font-size: var(--font-size);
    font-weight: 700;
    color: ${COLORS.gray700};
    padding: 4px;
    border-bottom: ${COLORS.black} var(--border-width) solid;
    
    &:focus-within {
        outline: 2px auto -webkit-focus-ring-color;
        outline-offset: 2px;
    }
    
    &:hover {
        color: ${COLORS.black};
    }
`;

const UJIcon = styled(Icon)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
`;

const InputText = styled.input`
    padding-left: var(--left-padding);
    width: 100%;
    border: none;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    font-weight: inherit;
    box-sizing: border-box;
    
    &::placeholder {
        font-weight: 400;
        color: ${COLORS.gray500};
    }
    
    &:focus {
        outline: none;
    }
`;

export default IconInput;
