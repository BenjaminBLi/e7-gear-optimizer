import { combineReducers } from 'redux'
import {AppState} from './types'

const initialState: AppState = {
    gear: {
        currentGear: []
    },
    hero: {
        heroes: []
    }
}

export default function tmpReducer(state: AppState = initialState, action:any){
    return state
}