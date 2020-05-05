export const HERO_ADDED = 'HeroSelector/added_hero';
export const HERO_REMOVED = 'HeroSelector/removed_hero';



export interface HeroSelectorState {
    heroes: string[]
}

export interface AddHero{
    type: typeof HERO_ADDED
    payload: {
        key: string
    }
}

export interface RemoveHero{
    type: typeof HERO_REMOVED
    payload: {
        key: string
    }
}

export type HeroSelectorActionTypes = AddHero | RemoveHero