import {useEffect,useState} from 'react'
import axios from 'axios'
import Pokemon from "../Pokemon/Pokemon"
import "./PokemonList.css"

const PokemonList = () => {

    const [pokemonlist,setPokemonList] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    
    const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon'

    async function downloadPokemons(){
        const response = await axios.get(POKEDEX_URL); //this downloads list of 20 pokemons
      //  console.log(response);
        const pokemonResults = response.data.results;  //we get the array of pokemons from result
       // console.log(pokemonResults)

       //Iterating over the array of pokemons and using their url ,to create an array of promises
       //that will download those 20 pokemons
        const pokemonResultPromise = pokemonResults.map((pokemon)=> axios.get(pokemon.url));
       // console.log(pokemonResultPromise)

       //Passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonResultPromise) //Array of 20 pokemon detailed data
       // console.log(pokemonData);

       //now iterate on the data of each pokemon and extract id,name and image
        const pokeListResult = pokemonData.map((pokeData)=>{
            const pokemon = pokeData.data;
            return {
                id:pokemon.id,
                name:pokemon.name,
                image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
                types: pokemon.types
            }
        })
        console.log("Result :",pokeListResult)
        setPokemonList(pokeListResult)
        setIsLoading(false)
    }

    useEffect(() =>{
        downloadPokemons();
    },[])
  return (
    <div className="pokemon-list-wrapper">

        <div className='pokemon-list'>Pokemon List</div>
         {
            (isLoading)?'Loading .....':
            pokemonlist.map((p) => <Pokemon key={p.id} name={p.name} image={p.image} />)
         }

      
       
    </div>
  )
}

export default PokemonList
