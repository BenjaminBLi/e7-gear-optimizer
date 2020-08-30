import { HeroListUpdatedAction, FetchHeroAction, FETCHING_HEROES, HEROES_UPDATED, Hero } from "./HeroSelectorTypes";

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