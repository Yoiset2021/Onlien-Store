import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import producto from './productos/reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
    producto
})

const sagaMiddleware = createSagaMiddleware()


export default function store() {
    return {
        ...createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware))),
        runSaga: sagaMiddleware.run(rootSaga)
    }
}