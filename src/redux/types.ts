import {GearDisplayState} from '../components/GearDisplay/GearDisplayTypes'
import {HeroSelectorState} from '../components/HeroSelector/HeroSelectorTypes'
export interface AppState{
    gear: GearDisplayState
    hero: HeroSelectorState
}