import getHeroSaga from './getHeroSaga'
import { all } from 'redux-saga/effects';

export default function* initSaga() {
    yield all([
        getHeroSaga()
    ])
}