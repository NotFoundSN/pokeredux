import {SET_POKEMONS} from './types';

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
});

export const getPokemonsWithDetails = (pokemonList = []) => (dispatch) => {
    
}