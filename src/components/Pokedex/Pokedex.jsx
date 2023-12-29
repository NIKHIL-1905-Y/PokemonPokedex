import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/Search"
import "./Pokedex.css"


const Pokedex = () => {

    
    
  return (
    <div className="pokedex-wrapper">
      
         <div className="pokedex-header">
              
         </div>
         <div className="search-comp">
             <Search  />
          <PokemonList/>
         </div>
        
    </div>
  )
}

export default Pokedex
