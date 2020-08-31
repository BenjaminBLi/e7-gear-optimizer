import { put } from 'redux-saga/effects'
import { fetchHeroes, updateHeroes } from '../../components/HeroSelector/HeroSelectorActions';

export default function* updateHeroListSaga() {
    const url = 'https://api.epicsevendb.com/api/hero'

    yield put(fetchHeroes())
    const heroJSON = yield fetch(url).then(response => response.json())
    const heroes = heroJSON.results

    yield put(updateHeroes(heroes))
}