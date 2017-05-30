import * as React from 'react';
import {compose} from 'react-apollo';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as  io from 'socket.io-client';
import styled from 'styled-components';
import {Body} from '../Components/Body/Body';
import {Navbar} from '../Components/Navbar/Navbar';
import {PDF} from '../Components/PDFReader/PDFReader';
import {getFile} from '../utils/Http';
import './App.css';


interface IProps {

}
interface IState {
}
//    background-color:red;

const Page = styled.div`
display:flex;
flex-direction: column;
height: 100vh;
`;

export class App extends React.Component<IProps, IState> {
    private pdf: any;
    private socket = io('http://localhost:3000/');

    constructor(props: IProps) {
        super(props);
        this.getPDF = this.getPDF.bind(this);
    }

    private getPDF(): void {

        console.log('partito');
        this.pdf = getFile().then(r => {
            this.pdf = r;
            this.forceUpdate();

        });
    }

    public render(): JSX.Element {
        console.log(this.pdf);
        return (
            <Page>
                <h4> Book Trading Club </h4>
                {Navbar()}
                <PDF pdf={this.pdf }/>
                <Body/>
            </Page>
        );

    }

}

const mapState = createStructuredSelector({});

export const AppConnected: any = compose(
    connect(mapState, undefined)
)(App);
