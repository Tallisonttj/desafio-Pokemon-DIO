
const loadmorebutton= document.querySelector('#loadmore')
const maxRecords = 151
const limit =12
let offset = 0
 const mostrar = document.querySelector('.pokemons')

function novospokemons(offset,limit){
    function convertpokemonHtml(pokemon){
        return `  <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
            ${pokemon.types.map((type) =>`<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.image}" alt="${pokemon.name}">
        </div>
    </li>
        `   
    }
    {
        pokeapi.getPokemons(offset,limit).then((pokemons = []) => {
       mostrar.innerHTML+= pokemons.map(convertpokemonHtml).join('')
    })
   }
    
}
novospokemons(offset,limit)

 loadmorebutton.addEventListener('click', () => {

    offset += limit
    
    const qtdrecord = offset + limit
    if(qtdrecord >= maxRecords){

        const newlimit = qtdrecord - maxRecords
        novospokemons(offset,limit)

        return loadmorebutton.style.display = 'none'
    }

     novospokemons(offset,limit) 
 })