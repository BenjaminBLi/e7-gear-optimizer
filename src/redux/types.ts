import {GearDisplayState} from '../modules/GearDisplay/GearDisplayTypes'
import {HeroSelectorState} from '../modules/HeroSelector/HeroSelectorTypes'
export interface AppState{
    gear: GearDisplayState
    hero: HeroSelectorState
}