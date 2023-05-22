import Pokecard from "./Pokecard";

const EXAMPLE_POKEMON = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ];

/**
 * Renders a div containing Pokecards for each pokemon.
 * @param {object} prop array of pokemon
 * {pokemon: [{id, name, type, base_experience}, ...]}}
 * @returns a div containing Pokecards for each pokemon.
 */
function Pokedex({ pokemonList=EXAMPLE_POKEMON }) {
    return (
        <div className="flex-wrap d-flex p-2 justify-content-center">
            {pokemonList.map(p => <Pokecard pokemon={p} />)}
        </div>);
}

export default Pokedex;