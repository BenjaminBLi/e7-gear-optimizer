import { all, call, spawn } from 'redux-saga/effects'
import GearDisplaySagas from '../components/GearDisplay/sagas/GearDisplaySagas'

export default function* rootSaga(){
    yield all([
        GearDisplaySagas()
    ])
    
}