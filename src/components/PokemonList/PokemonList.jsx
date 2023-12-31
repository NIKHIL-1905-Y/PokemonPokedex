import {useEffect,useState} from 'react'
import axios from 'axios'
import Pokemon from "../Pokemon/Pokemon"
import "./PokemonList.css"

const PokemonList = () => {

    const [pokemonlist,setPokemonList] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const [pokedexUrl,setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const[nextUrl,setNextUrl] = useState('');
    const[prevUrl,setPrevUrl] = useState('');




    async function downloadPokemons(){
      setIsLoading(true);
        const response = await axios.get(pokedexUrl); //this downloads list of 20 pokemons
      //  console.log(response);
        const pokemonResults = response.data.results;  //we get the array of pokemons from result
       // console.log(pokemonResults)
          console.log(response.data)
       setNextUrl(response.data.next)
       setPrevUrl(response.data.previous)
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
    },[pokedexUrl])
  return (
    <div className="pokemon-list-wrapper">
             
             <div className='pokemon-list-heading'> Pokemon List</div>
        <div className='pokemon-wrapper'>
         {
            (isLoading)?'Loading .....':
            pokemonlist.map((p) => <Pokemon key={p.id} name={p.name} image={p.image} id={p.id} />)
         }
        </div>
     <div className="controls">
      <button disabled={prevUrl==null} onClick={()=> setPokedexUrl(prevUrl)}>PREV</button>
      <button disabled={nextUrl==null} onClick={()=>setPokedexUrl(nextUrl)}>NEXT</button>
     </div>
    </div>
  )
}

export default PokemonList
