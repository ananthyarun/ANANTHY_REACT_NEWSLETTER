import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import subscribeReducer from "./reducers/newsletter";
import createSagaMiddleware from "redux-saga";
import { getSubscribeWatcher } from "./sagas";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
let sagaMiddleware = createSagaMiddleware();
const store = createStore(
    subscribeReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware, createLogger()))
);
sagaMiddleware.run(getSubscribeWatcher);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
