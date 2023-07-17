import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './EditCharacters.css'

const url = 'http://localhost:8080/characters'

const EditCharacters = () => {

    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [discribe, setDiscribe] = useState("")
    const navigate = useNavigate()

    const {id} = useParams()  //choise persona

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${url}/${id}`, {
            name: name,
            img: picture,
            description: discribe
        })
        navigate("/")
    }
    useEffect( () => {
       const getCharactersById = async () => {

        const response = await axios.get(`${url}/${id}`)
        setName(response.data.name)
        setPicture(response.data.img)
        setDiscribe(response.data.description)
       }

       getCharactersById()
    }, [id])

    return (
        <>
            <div className="container-create">
                <h3>Edit an persona</h3>
                <form onSubmit={update}>
                    <div >
                        <form>Name</form>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <form>Picture</form>
                        <input type="text" value={picture} onChange={(e) => setPicture(e.target.value)} />
                    </div>
                    <div>
                        <form>Discribe</form>
                        <textarea name="" id="" cols="22" rows="15" value={discribe} onChange={(e) => setDiscribe(e.target.value)}></textarea>
                    </div>
                    <button className="buttons">Change</button>
                </form>
                
            </div>
        </>
    )
}


export default EditCharacters;