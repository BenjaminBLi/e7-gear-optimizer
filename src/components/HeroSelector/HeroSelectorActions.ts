import { HeroListUpdatedAction, FetchHeroAction, FETCHING_HEROES, HEROES_UPDATED, Hero, HeroSelectedAction, HERO_SELECTED } from "./HeroSelectorTypes";


//initialization shit for heroes
export function fetchHeroes(): FetchHeroAction{
    return {
        type: FETCHING_HEROES
    }
}

export function updateHeroes(heroes: Hero[]): HeroListUpdatedAction{
    return {
        type: HEROES_UPDATED,
        payload: {
            heroes
        }
    }
}

export function selectedHeroes(heroes: Hero[]): HeroSelectedAction{
    return {
        type: HERO_SELECTED,
        payload: {
            heroes: heroes
        }
    }
}