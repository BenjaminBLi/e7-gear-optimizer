import {GearDisplayActionTypes, ADD_GEAR, REMOVE_GEAR, GearDisplayState} from './GearDisplayTypes'

const initialState: GearDisplayState = {
    currentGear: []
}

export function GearDisplayReducer(
    state: GearDisplayState = initialState, 
    action: GearDisplayActionTypes
): GearDisplayState {
    switch(action.type){
        case ADD_GEAR:
            return {
                ...state,
                currentGear: [...state.currentGear, ...action.payload.gears]
            }
        case REMOVE_GEAR:
            return state
        default:
            return state
    }
}

