import axios from "axios" 
import { useEffect } from "react"
import { useState } from "react"
import './ShowCharacters.css'

const url = "http://localhost:8080/characters" 
const ShowCharacters = () => {
   
    const [characters, setCharacters] = useState ([])    
useEffect( () => {
getAllCharacters()
}, [])
const getAllCharacters = async () => { 
    const response = await axios.get(url) 
    let data = response.data
    console.log(data)
    setCharacters(data)
}

return (
    <>
    {
      characters.map (character => (
        <div className="contenedor" key = {character.id}>
          <img className="pic" src= {character.img} alt=""/>
          <h3 className="name"> {character.name} </h3>
          <p className="descript" > {character.description}</p>
        </div>
      ))
    }
    
    </>
  )
}

export default ShowCharacters