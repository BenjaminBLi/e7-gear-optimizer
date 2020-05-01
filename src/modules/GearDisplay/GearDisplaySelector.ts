import {AppState} from '../../redux/types'
import {Gear} from '../GearDisplay/GearDisplayTypes'

export const getGear = (state: AppState): Gear[] => {
    return state.gear.currentGear
}