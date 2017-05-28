import {History as HistoryType} from 'history';
import createHistory from 'history/createBrowserHistory';
import {ApolloClient, createNetworkInterface} from 'react-apollo';
import {Store} from 'react-redux';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {applyMiddleware, compose, createStore, Middleware, Reducer, StoreEnhancerStoreCreator} from 'redux';
import {reducer as formReducer} from 'redux-form/immutable';
import {combineReducers} from 'redux-immutable';

export const client: ApolloClient = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: `/graphql}`,
        opts: {
            credentials: 'same-origin'
        }
    }),
    reduxRootSelector: (state) => state.get('apollo')
});

interface IWindowRedux extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: StoreEnhancerStoreCreator<{}>;
}
declare const window: IWindowRedux;
// debug for redux
const composeEnhancers: StoreEnhancerStoreCreator<{}> = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// history model
export const History: HistoryType = createHistory();
// inject history model into the router
const historyRouter: Middleware = routerMiddleware(History);
// combining the reducer before putting them into the store
const reducers: Reducer<{}> = combineReducers({
    router: routerReducer,
    apollo: client.reducer(),
    form: formReducer
});

export const store: Store<{}> = createStore(
    reducers,
    composeEnhancers(applyMiddleware(client.middleware(), historyRouter))
);
