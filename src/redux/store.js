import createSagaMiddleware from "@redux-saga/core"
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { mySaga } from "./saga/rootSaga";
const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = (typeof window !== "undefined" &&  window.__REDUX_DEVTOOLS_EXTENSION__ ||compose )
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() :composeEnhancer 
    )
);
sagaMiddleware.run(mySaga);

export default store;
