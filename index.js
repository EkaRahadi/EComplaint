/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Component } from 'react';

import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootSaga from './app/sagas/rootSaga';

import allReducer from './app/reducers';
import creatSagaMiddleware from 'redux-saga';

const sagaMiddleware = creatSagaMiddleware();

let store = createStore(allReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const newApp = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => newApp);

