const POKEMON_IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

/**
 * Renders a card with the data for a specific pokemon
 *
 * @param {object} {pokemon: {id, name, type, base_experience}}
 *
 * @returns div with all the data provided as well as an image for the pokemon
 */
function Pokecard({pokemon}) {
    const {id, name, type, base_experience} = pokemon;

    return (
        <div className="p-2 bg-light text-center w-50">
            <b className="text-primary">{name}</b> <br/>
            <img src={`${POKEMON_IMAGE_URL}${id}.png`} alt={name}/> <br/>
            Type: {type} <br/>
            EXP: {base_experience}
        </div>
    )
}

export default Pokecard;