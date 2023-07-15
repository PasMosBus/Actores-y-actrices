import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import './ShowCharacters.css'

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
    const handleEdit = (id) => {
    // Перенаправляємо на сторінку редагування (в реальному застосунку)
    // navigate(`/edit-character/${id}`);
    alert(`Editing character with ID ${id}`);
  };

  const handleDelete = (id) => {
    // Видалення з локального стану (в реальному застосунку)
    setCharacters(characters.filter((character) => character.id !== id));
    alert(`WARNING!!! Deleting character with ID ${id}`);
  };

  return (
    <>
      {
        characters.map(character => (
          <div className="all-container">
            <div className="contenedor" key={character.id}>
              <img className="pic" src={character.img} alt="" />
              <h3 className="name"> {character.name} </h3>
              <p className="descript" > <span>{character.name} </span>{character.description}</p>
              <div className="container-buttones">
              <button className="buttons" onClick={() => handleEdit(character.id)}>
                Edit
              </button>
              <button className="buttons" onClick={() => handleDelete(character.id)}>
                Delete
              </button>
            </div>

            </div>
          </div>
        ))
      }


    </>
  )
}

export default ShowCharacters