import axios from "axios"
import { useEffect, useState } from "react"

const url ='http://localhost:8080/characters'

const ShowCharacters = () => {

    const [characters, setCharacters] = useState ([])
    useEffect (() => {
    getAllCharacters()
    }, [])

const getAllCharacters = async () => {
const response = await axios.get(url) /*Esta linea en lugar de fetch*/
let data = response.data
console.log(data)
setCharacters(data)

}



  return (
    <>
    {
      characters.map (character => (
        <div className="contenedor" key = {character.id}>
          <img src="" alt=""/>
          <h3></h3>
          <p></p>
        </div>
      ))
    }
    
    </>
  )
}

export default ShowCharacters