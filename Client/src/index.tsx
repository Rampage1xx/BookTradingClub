import * as React from 'react';
import ApolloProvider from 'react-apollo/lib/ApolloProvider';
import * as ReactDOM from 'react-dom';
import {Router} from 'react-router';
import routes from './routes';
import {client, store, History} from './store/store';

ReactDOM.render(
    <ApolloProvider store={ store } client={ client }>
        <Router history={ History }>
            {routes}
        </Router>
    </ApolloProvider>,
    document.getElementById('app'));
