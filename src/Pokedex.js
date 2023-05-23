import Pokecard from "./Pokecard";


/**
 * Renders a div containing Pokecards for each pokemon.
 * @param {object} prop array of pokemon
 * {pokemon: [{id, name, type, base_experience}, ...]}}
 * @returns a div containing Pokecards for each pokemon.
 */
function Pokedex({ pokemonList, totalExp, isWinner }) {

    return (
        <div className="text-center">Total EXP: <b>{totalExp}</b>
            <div className="flex-wrap d-flex p-1 justify-content-center">
                {pokemonList.map(p => <Pokecard pokemon={p} />)}
            </div>
            <b>{isWinner ? "THIS HAND WINS!" : ":("}</b>
        </div>);
}

export default Pokedex;