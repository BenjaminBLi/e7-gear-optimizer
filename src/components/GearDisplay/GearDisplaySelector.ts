import {AppState} from '../../redux/types'
import {Gear} from './GearDisplayTypes'

export const getGear = (state: AppState): Gear[] => {
    return state.gear.currentGear
}