import * as React from 'react';
import {compose} from 'react-apollo';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import styled from 'styled-components';
import './App.css';
import {Navbar} from '../Components/Navbar/Navbar';
import {Body} from '../Components/Body/Body';

interface IProps {

}
interface IState {
}
//    background-color:red;

const Page = styled.div`
display:flex;
flex-direction: column;
height: 100vh;
`



export class App extends React.Component<IProps, IState> {

    public render(): JSX.Element {

        return (
            <Page>
                <h4> Book Trading Club </h4>
                <Navbar/>
                <Body/>
            </Page>
        );

    }

}

const mapState = createStructuredSelector({});

export const AppConnected: any = compose(
    connect(mapState, undefined)
)(App);
