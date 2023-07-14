import axios from "axios" 
import { useEffect } from "react"
import { useState } from "react"

const url = "http://localhost:8080/characters" 
const ShowCharacters = () => {
   
    const [characters, setCharacters] = useState ([])    
useEffect( () => {
getAllCharacters()
}, [])
const getAllCharacters = async () => { 
    const response = await axios.get(url) 
    let data = response.data
    console.log(response.data)
    setCharacters(data)
}

return (
<div>ShowCharacters</div>
)
}

export default ShowCharacters