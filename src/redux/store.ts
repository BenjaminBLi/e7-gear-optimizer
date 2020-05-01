import { all, call, spawn } from 'redux-saga/effects'
import { applyMiddleware, createStore } from 'redux'
import reducer from './reducer'

const sagas = []
const store = createStore(reducer)

export {store} 
export default store