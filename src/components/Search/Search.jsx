import "./Search.css"
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (

    <div className="search-container" >
         <div className="search-content">
          <div className="search-btn">
              <h2 className="search-title">Type a Name</h2>
              <div className="search-wrapper">
                      <input
                      id="pokemon-name-search" 
                      type="text"
                      placeholder="Pokemon name ..."
                        />
                        <div className="search-icon">
                        <FaSearch style={{color:'white' ,fontSize:'1.5rem'}} />
                        </div>
                     
              </div>
              <p className="search-para">Use Search to explore Pokemon Names and features </p>
          </div>
          <div className="search-instruction">
                Search a Pokemon by Using its name
          </div>
         </div>
    </div>
   
  )
}

export default Search;
