import * as React from 'react';
import styled from 'styled-components';

const LeftSideBox: any = styled.div`
        max-width: calc(99% * 3/14 - 0.3rem);
        background: green;
        flex:2;
        justify-content:center;
        display:flex;
`;

const LeftSide: any = styled.div`
        max-width: calc(89% * 8/10  - 0.1rem);
        background-color: lightseagreen;
        flex:2;
`;

export const LeftSideBody = (props) => {

    return (

        <LeftSideBox>
            <LeftSide/>
        </LeftSideBox>
    );
};
