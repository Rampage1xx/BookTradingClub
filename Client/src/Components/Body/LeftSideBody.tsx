import * as React from 'react';
import styled from 'styled-components';

const LeftSideBox: any = styled.div`
        max-width: calc(99% * 3/14 - 0.3rem);
        flex:2;
        justify-content:center;
        display:flex;
                border: 1px;
    border-style:solid;
`;

const LeftSide: any = styled.div`
        max-width: calc(89% * 8/10  - 0.1rem);
        flex:2;
                border: 1px;
    border-style:solid;
`;

export const LeftSideBody = (props) => {

    return (

        <LeftSideBox>
            <LeftSide/>
        </LeftSideBox>
    );
};
