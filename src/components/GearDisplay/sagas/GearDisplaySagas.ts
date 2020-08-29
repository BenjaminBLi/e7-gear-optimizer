import { put, takeEvery, all } from 'redux-saga/effects'
import { ADD_GEAR } from '../GearDisplayTypes';
import addGearSaga from './addGearSaga'

export default function* GearDisplaySagas() {
    yield takeEvery(ADD_GEAR, addGearSaga);
}