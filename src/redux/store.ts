import { applyMiddleware, compose, createStore } from 'redux'
import rootSaga from './saga'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const middleWare = createSagaMiddleware();

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(middleWare)));
middleWare.run(rootSaga)

export {store} 
export default store