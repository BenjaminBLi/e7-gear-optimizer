import { HeroSelectorActionTypes, HeroSelectorState, HEROES_UPDATED, HERO_SELECTED} from './HeroSelectorTypes'

const initialState: HeroSelectorState = {
    heroes: [],
    selectedHeroes: []
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
        case HERO_SELECTED:
            return {
                ...state,
                selectedHeroes: action.payload.heroes
            }
        default:
            return state
    }
}