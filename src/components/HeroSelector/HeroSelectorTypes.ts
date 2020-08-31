export const HEROES_UPDATED = 'HeroSelector/updated_heroes';
export const FETCHING_HEROES = 'HeroSelector/fetching_heroes';
export const HERO_SELECTED = 'HeroSelector/selected_hero'

export interface HeroSelectorState {
    heroes: Hero[]
    selectedHeroes: Hero[]
}

export interface Hero {
    name: string
}

export interface FetchHeroAction{
    type: typeof FETCHING_HEROES
}

export interface HeroListUpdatedAction{
    type: typeof HEROES_UPDATED 
    payload: {
        heroes: Hero[]
    }
}

export interface HeroSelectedAction{
    type: typeof HERO_SELECTED
    payload: {
        heroes: Hero[]
    }
}

export type HeroSelectorActionTypes = HeroListUpdatedAction | FetchHeroAction | HeroSelectedAction