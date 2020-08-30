export const HEROES_UPDATED = 'HeroSelector/updated_heroes';
export const FETCHING_HEROES = 'HeroSelector/fetching_heroes';

export interface HeroSelectorState {
    heroes: Hero[]
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

export type HeroSelectorActionTypes = HeroListUpdatedAction | FetchHeroAction