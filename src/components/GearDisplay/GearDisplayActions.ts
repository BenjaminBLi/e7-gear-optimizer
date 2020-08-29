import {GearDisplayActionTypes, REMOVE_GEAR, ADD_GEAR, Gear} from './GearDisplayTypes'

export function addGear(gears: Gear[]): GearDisplayActionTypes {
    return {
        type: ADD_GEAR,
        payload: {
            gears
        }
    }
}

export function removeGear(gears: Gear[]): GearDisplayActionTypes {
    return {
        type: REMOVE_GEAR,
        payload: {
            gears
        }
    }
}