import Pokedex from "./Pokedex";
import { shuffle } from "lodash";

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


/** Pokegame renders 2 separated hands of pokemon rendered from Pokedex
 *
 * @param {array} availablePokemon array of pokemon [{id, name, type, base_experience}, ...]
 * @returns 2 divs each containing half of pokemon in availablePokemon
 */
function Pokegame({availablePokemon=EXAMPLE_POKEMON}) {
  const shuffledPokemon = shuffle(availablePokemon);
  const playerOne = shuffledPokemon.slice(0, availablePokemon.length / 2);
  const playerTwo = shuffledPokemon.slice(availablePokemon.length / 2);

  const playerOneTotal = totalBaseExperience(playerOne);
  const playerTwoTotal = totalBaseExperience(playerTwo);

  const playerOneResult = playerOneTotal > playerTwoTotal;
  const playerTwoResult = !playerOneResult;

  return (
    <div className="d-flex flex-row justify-content-center">
      <Pokedex pokemonList={playerOne} totalExp={playerOneTotal} isWinner={playerOneResult} />
      <h1 className="text-center text-danger">VS</h1>
      <Pokedex pokemonList={playerTwo} totalExp={playerTwoTotal} isWinner={playerTwoResult}/>
    </div>
  )
}

/** totalBaseExperience takes in a list of pokemon [{id, name, type, base_experience}, ...]
 *  and returns the total base experience (integer)
 *
 * @param {array} pokemonList
 */
function totalBaseExperience(pokemonList) {
  return pokemonList.map(p => p.base_experience).reduce(
    (tracker, currentVal) => tracker + currentVal, 0
  );
}

export default Pokegame
