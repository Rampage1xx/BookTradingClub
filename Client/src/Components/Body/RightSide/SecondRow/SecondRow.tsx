import * as React from 'react';
import styled from 'styled-components';
import {FirstColumn} from './FirstColumn';
import {SecondColumn} from './SecondColumn';

const StyledRow = styled.div`
    flex:3;
    margin-top:1%;
    margin-bottom:1%;
    display:flex
    flex-direction:column;
        border: 1px;
    border-style:solid;
`;

export const SecondRow = (props) => {

    return (
        <StyledRow>
            <FirstColumn/>
            <SecondColumn/>
        </StyledRow>
    );
};
