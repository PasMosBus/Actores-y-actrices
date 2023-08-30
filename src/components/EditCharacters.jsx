import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './EditCharacters.css'

const url = 'http://localhost:8080/characters'

const EditCharacters = () => {
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [discribe, setDiscribe] = useState("")
    const [character, setCharacter] = useState(null); // Add datos personage en linea 30
    const navigate = useNavigate()

    const { id } = useParams()  //choise persona

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${url}/${id}`, {
            name: name,
            img: picture,
            description: discribe
        })
        navigate("/")
    }
    useEffect(() => {
        const getCharactersById = async () => {
            const response = await axios.get(`${url}/${id}`);
            const data = response.data;
            setCharacter(data); // Guardar datos personage
            setName(data.name);
            setPicture(data.img);
            setDiscribe(data.description);
        }

        getCharactersById()
    }, [id])

    return (
        <>
            <div className="all-container">
                <div className="container-create">
                    <h3>Edit data</h3>
                    {character && <img className="pic-small" src={character.img} alt="" />} 
                    <form onSubmit={update}>
                        <div >
                            <form>Name</form> 
                            <input type="text" id="hover" 
                            value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <form>Picture</form>
                            <input type="text" id="hover" 
                            value={picture} onChange={(e) => setPicture(e.target.value)} />
                        </div>
                        <div>
                            <form>Discribe</form>
                            <textarea name="" id="hover" cols="22" rows="10" 
                            value={discribe} onChange={(e) => setDiscribe(e.target.value)}></textarea>
                        </div>
                        <button className="buttons">Change</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditCharacters;