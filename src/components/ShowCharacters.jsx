import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import './ShowCharacters.css'

//const navigate = useNavigate()

const url = "http://localhost:8080/characters"
const ShowCharacters = () => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    getAllCharacters()
  }, [])
  const getAllCharacters = async () => {
    const response = await axios.get(url)
    let data = response.data
    console.log(data)
    setCharacters(data)
  }


  const handleDelete = (id) => {
    // Deleting with API localhost8080
    setCharacters(characters.filter((character) => character.id !== id));
    alert(`WARNING!!! DELETING ACTOR WITH ID ${id}`);
  };

  return (
    <>
      {
        characters.map(character => (
          <div className="all-container">
            <div className="contenedor" key={character.id}>
              <img className="pic" src={character.img} alt="" />
              <p className="name"> {character.name} </p>
              <p className="descript" > <span>{character.name} </span>{character.description}</p>
              <div className="container-buttones">
                <NavLink to={`/edit/${character.id}`}> <button className="buttons">Edit</button> </NavLink>
                <button className="buttons" onClick={() => handleDelete(character.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default ShowCharacters