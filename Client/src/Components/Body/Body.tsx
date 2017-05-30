import * as React from 'react';
import styled from 'styled-components';
import {LeftSideBody} from './LeftSideBody';
import {RightSideBody} from './RightSide/RightSideBody';

const BodyBox = styled.div`
   flex:1;
        border: 1px;
        border-style:solid;
   display:flex
`;

export const Body = (props) => {

    return (

        <BodyBox>
            <LeftSideBody/>
            <RightSideBody/>
        </BodyBox>
    );
};
