import "./Pokemon.css"
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Pokemon = ({ name , image ,id }) => {
  return (
    <div className="pokemon">
      <Link to={`/pokemon/${id}`}>
      <div className="pokemon-name">{name}</div>
      <div className="pokemon-image"><img src={image} alt="" /></div>

      </Link>
      
    </div>
  )
}

export default Pokemon
