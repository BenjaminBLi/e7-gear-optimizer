import { HeroSelectorActionTypes, HeroSelectorState, HEROES_UPDATED} from './HeroSelectorTypes'

const initialState: HeroSelectorState = {
    heroes: []
}

export function HeroSelectorReducer(
    state: HeroSelectorState = initialState,
    action: HeroSelectorActionTypes
): HeroSelectorState {
    switch (action.type) {
        case HEROES_UPDATED:
            return {
                ...state,
                heroes: action.payload.heroes
            }
        default:
            return state
    }
}