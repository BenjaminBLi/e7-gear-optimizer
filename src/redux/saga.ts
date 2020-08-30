import { all } from 'redux-saga/effects'
import GearDisplaySagas from '../components/GearDisplay/sagas/GearDisplaySagas'
import initSaga from './startupSagas/initSaga'

export default function* rootSaga(){
    yield all([
        initSaga(),
        GearDisplaySagas()
    ])
    
}