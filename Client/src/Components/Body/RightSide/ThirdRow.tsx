import * as React from 'react';
import styled from 'styled-components';

const ThirdRowStyled = styled.div`
    flex:1;
    border: 1px;
    border-style:solid;
    flex-direction:row;
    display:flex;
    justify-content: space-around;
`;
const Blocks = styled.div`
    flex:1;
    max-width: calc(99% * 1/3 - 0.6rem);
    border: 1px;
    border-style:solid;
`;
export const ThirdRow = (props) => {

    return (
        <ThirdRowStyled>
            <Blocks/>
            <Blocks/>
            <Blocks/>
            <Blocks/>
        </ThirdRowStyled>

    );
};
