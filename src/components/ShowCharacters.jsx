import axios from "axios" 
import { useEffect } from "react"

const url = "http://localhost:8080/characters" 
const ShowCharacters = () => {
useEffect( () => {
getAllCharacters()
}, [])
const getAllCharacters = async () => { 
    const response = await axios.get(url) 
    let data = response.data
   
}

return (
<div>ShowCharacters</div>
)
}

export default ShowCharacters