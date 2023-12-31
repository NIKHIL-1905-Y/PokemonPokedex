import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import "./PokemonDetails.css"


const PokemonDetails = () => {
    const {id} = useParams();
     const [pokemon,setPokemon] = useState({})
    async function downloadPokemon(){
         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
         console.log("Pokemon Data" ,response.data)
         const poke = response.data;

         setPokemon({
            name: poke.name,
            image: poke.sprites.other.dream_world.front_default,
            weight: poke.weight,
            height: poke.height,
            types:  poke.types.map((t) => t.type.name)
         })
    }

    useEffect(()=>{
        downloadPokemon();
    },[]);
  return (
    <div className="pokemon-details">
    <div className="poke-details-wrapper">
       <div className="poke-details-name">
        {pokemon.name}  
       </div>
       <div className="poke-details-image" >
       <img src={pokemon.image} alt="poke-image" />
       </div>
       <div className="poke-details-height">Height is {pokemon.height} units </div>
       <div className="poke-details-weight">Weight is {pokemon.weight} units</div>
        <div className="pokemon-types">
        c {pokemon.types && pokemon.types.map((t) => <div key={t} className="type"> {t} </div>)}
        </div>
    </div>
    <div className="back-home">
            <h2><Link to = "/">Back to Home</Link></h2>
        </div>
    </div>
  )
}

export default PokemonDetails
