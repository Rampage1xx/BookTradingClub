import * as React from 'react';
import styled from 'styled-components';
import {LeftSideBody} from './LeftSideBody';
import {RightSideBody} from './RightSideBody';

const BodyBox = styled.div`
   flex:1;
   background: purple;
   flex-direction: row;
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
