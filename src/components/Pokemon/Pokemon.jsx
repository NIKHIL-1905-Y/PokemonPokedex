import "./Pokemon.css"

const Pokemon = ({ name , image }) => {
  return (
    <div className="pokemon">
      <div className="pokemon-name">{name}</div>
      <div className="pokemon-image"><img src={image} alt="" /></div>
    </div>
  )
}

export default Pokemon
