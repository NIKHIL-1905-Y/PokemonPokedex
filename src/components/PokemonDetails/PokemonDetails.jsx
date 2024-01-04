import { useParams } from "react-router-dom";
import './PokemonDetails.css';
import usePokemonDetails from "../../hooks/usePokemonDetails";
import { Link } from "react-router-dom";


const PokemonDetails = () => {
  const {id} = useParams();
  const [pokemon] = usePokemonDetails(id);

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
         {pokemon.types && pokemon.types.map((t) => <div key={t} className="type"> {t} </div>)}
        </div>
    </div>
    <div className="back-home">
            <h2><Link to = "/">Back to Home</Link></h2>
        </div>
        {
                pokemon.types && pokemon.similarPokemons && 
                <div>
                    more {pokemon.types[0]} type pokemons

                    <ul>
                        {pokemon.similarPokemons.map((p) => <li key={p.pokemon.id}>{p.pokemon.name}</li>)}

                    </ul>
                </div>
            }
    </div>
  )
}

export default PokemonDetails
