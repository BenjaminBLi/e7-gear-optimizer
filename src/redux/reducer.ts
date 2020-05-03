import { combineReducers } from 'redux'
import { GearDisplayReducer } from '../modules/GearDisplay/GearDisplayReducer'
import {HeroSelectorReducer} from '../modules/HeroSelector/HeroSelectorReducer'

export default combineReducers({gear: GearDisplayReducer, hero: HeroSelectorReducer})
