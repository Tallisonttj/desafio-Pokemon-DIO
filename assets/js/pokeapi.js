
const pokeapi = {}

function converPokeapi(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.id
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types =types
    pokemon.type = type
    pokemon.image = pokeDetail.sprites.other.dream_world.front_default  

    return pokemon
}

pokeapi.getPokemonDetails = (pokemon) =>{
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(converPokeapi)
}

pokeapi.getPokemons =(offset =0 , limit = 5)  =>  {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)   
        .then((pokemons) => pokemons.map(pokeapi.getPokemonDetails)
    ) 
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemondetails) => pokemondetails)
        
}