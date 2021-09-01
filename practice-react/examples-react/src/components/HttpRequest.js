import { useState, useEffect } from "react";

const PokemonInfo = ({pokemonName}) =>{
    const [status, setStatus] = useState('idle')
    const [pokemon, setPokemon] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        if(!pokemonName){
            return 
        }
        setStatus('pending')
        fetchPokemon(pokemonName).then(
            pokemonData => {
                setPokemon(pokemonData)
                setStatus('resolved')
            },
            errorData => {
                setError(errorData)
                setStatus('rejected')
            }
        )
    }, [pokemonName])

    if (status === 'idle'){
        return 'Submit a Pokemon'
    }

    if (!pokemonName){
        return 'Submit a pokemon name'
    }

    if (status === 'rejected'){
        return <div>Oh no! There was an error with the request :(</div>
    }
    if (status === 'pending'){
        return '...'
    }

    if (status === 'resolved'){
        return <pre>{JSON.stringify(pokemon, null, 2)}</pre>
    }

}

function fetchPokemon(name){
    const pokemonQuery =`
    query ($name: String){
        pokemon(name: $name){
            id
            number
            attacks{
                special{
                    name
                    type
                    damage
                }
            }
        }
    }`
    return window
    .fetch('https://graphql-pokemon.now.sh', {
        // to learn more about this API: https://graphql-pokemon.now.sh
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            query: pokemonQuery,
            variable: {name},
        }),
    })
    .then(r => r.json())
    .then(response => response.data.pokemon)
}

const HttpRequest = () =>{
    const [pokemonName, setPokemonName] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        setPokemonName(event.target.elements.pokemonName.value)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pokemonName">Pokemon: </label>
                <div>
                    <input id="pokemonName" type="text" />
                    <button type="submit">Submit</button>
                </div>
            </form>
            <hr />
            <PokemonInfo pokemonName={pokemonName} />
        </div>
    )
}



export default HttpRequest;