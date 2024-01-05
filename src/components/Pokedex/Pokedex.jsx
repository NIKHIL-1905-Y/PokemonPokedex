import { useEffect, useState } from "react"
import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/Search"

import "./Pokedex.css"
import PokemonDetails from "../PokemonDetails/PokemonDetails"


const Pokedex = () => {

    const [searchTerm,setSearchTerm] = useState('')

    
  return (
    <div className="pokedex-wrapper">
      
        
         <div className="search-comp">
             <Search updateSearchTerm={setSearchTerm} />
             
         {(!searchTerm)?  <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
         </div>
        
    </div>
  )
}

export default Pokedex
