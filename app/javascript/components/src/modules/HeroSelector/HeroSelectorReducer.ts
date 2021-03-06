import { HeroSelectorActionTypes, HeroSelectorState, HERO_ADDED, HERO_REMOVED } from './HeroSelectorTypes'

const initialState: HeroSelectorState = {
    heroes: []
}

export function HeroSelectorReducer(
    state: HeroSelectorState = initialState,
    action: HeroSelectorActionTypes
): HeroSelectorState {
    switch (action.type) {
        case HERO_ADDED:
            return state
        case HERO_REMOVED:
            return state
        default:
            return state
    }
}