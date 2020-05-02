import {GearDisplayActionTypes, ADD_GEAR, REMOVE_GEAR, GearDisplayState} from './GearDisplayTypes'

export function GearDisplayReducer(
    state: GearDisplayState, 
    action: GearDisplayActionTypes
): GearDisplayState {
    switch(action.type){
        case ADD_GEAR:
            return state
        case REMOVE_GEAR:
            return state
        default:
            return state
    }
}

