import * as React from 'react'
import styled from 'styled-components';


const NavbarBox = styled.div`
    display: flex;
    flex-direction: row;
    height: 6rem;
`;

const RightSide = styled.div`
    width: calc(99% * 3/10 - (1rem - 1rem * 1/3));
    background-color: black;
    height: calc(99% * 5/10 - 0.3rem);
    align-self: center;
    margin: auto;
    `;
//    background-color: black;

const LeftSide = styled.div`
    width: calc(99% * 6/10 - (1rem - 1rem * 1/3));
    margin-left: auto;
    align-items:center;
    display:flex;
    justify-content: space-around;
`;
const LeftSideChild = styled.div`
     height: calc(99% * 3/10 - 0.3rem);
    background-color: green;
    width:calc(99% * 2/10 - 0.3rem);
`;


export const Navbar = (props) => {

    return (
        <NavbarBox>
            <RightSide/>
            <LeftSide>
                <LeftSideChild/>
                <LeftSideChild/>
                <LeftSideChild/>
            </LeftSide>
        </NavbarBox>

    )
}
