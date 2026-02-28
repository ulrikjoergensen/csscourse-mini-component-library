/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizeStyles = {
    small: {
        height: '8px',
        radius: '4px',
        padding: '0',
    },
    medium: {
        height: '12px',
        radius: '4px',
        padding: '0',
    },
    large: {
        height: '24px',
        radius: '8px',
        padding: '4px',
    },
};


const ProgressBar = ({ value, size }) => {
    const sizeStyle = sizeStyles[size];
    return (
        <Wrapper
            styles={sizeStyle}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
        >
            <VisuallyHidden>{value}%</VisuallyHidden>
            <ProgressWrapper styles={sizeStyle}>
                <Progress value={value} />
            </ProgressWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: ${(props) => (props.styles.height)};
    background-color: ${COLORS.transparentGray15};
    padding: ${(props) => (props.styles.padding)};
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
    border-radius: ${(props) => (props.styles.radius)};
`;

const ProgressWrapper = styled.div`
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
`

const Progress = styled.div`
    width: ${(props) => props.value}%;
    height: 100%;
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
`

export default ProgressBar;
