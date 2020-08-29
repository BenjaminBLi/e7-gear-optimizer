import { combineReducers } from 'redux'
import { GearDisplayReducer } from '../components/GearDisplay/GearDisplayReducer'
import {HeroSelectorReducer} from '../components/HeroSelector/HeroSelectorReducer'

export default combineReducers({gear: GearDisplayReducer, hero: HeroSelectorReducer})
