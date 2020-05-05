export const ADD_GEAR = 'GearDisplay/add_gear'
export const REMOVE_GEAR = 'GearDisplay/add_gear'

export type GearTypes = 
    'speed' |
    'hit' | 
    'crit' |
    'hp' |
    'def' |
    'attack' |
    'destruction' |
    'counter' |
    'resist' |
    'rage' |
    'immunity'

export type StatTypes =
    'hp' | 'hp%' |
    'def' | 'def%' |
    'attack' | 'attack%' |
    'speed' |
    'crit chance' |
    'crit damage' |
    'effectiveness' |
    'effect resist'

export type Stat = {
    val: number
    type: StatTypes
}

export interface Gear{
    enhanced?: number
    set: GearTypes
    mainStat: Stat
    subStats: Stat[]
}

export interface addGear {
    type: typeof ADD_GEAR
    payload: {
        gears: Gear[]
    }
}

export interface removeGear {
    type: typeof REMOVE_GEAR
    payload: {
        gears: Gear[]
    }
}

export interface GearDisplayState {
    currentGear: Gear[]
}

export type GearDisplayActionTypes = addGear | removeGear