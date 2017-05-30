import * as React from 'react';
import styled from 'styled-components';
import {FirstRow} from './FirstRow';
import {SecondRow} from './SecondRow/SecondRow';
import {ThirdRow} from './ThirdRow';

const RightSideBox = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        border: 1px;
        border-style:solid;
`;

export const RightSideBody = (props) => {

    return (
        <RightSideBox>
            <FirstRow/>
            <SecondRow/>
            <ThirdRow/>
        </RightSideBox>

    );
};
