import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const url = "http://localhost:8080/characters"

const CreateCharacters = () => {

    const [name, setName] = useState('')
    const [picture, setPicture] = useState('')
    const [discribe, setDiscribe] = useState('')

    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        // dos parametros: 1 = url, 2 = un objeto con mis datos.
        //Aquí le digo como enlazar eso datos de la API con los que le voy a enviar
        await axios.post(url, { name: name, img: picture, description: discribe})
        navigate("/")
    }

    return (
        <><h3>Create an element</h3>
        <form onSubmit={store}>
            <div>
                <form>Name</form>
                {/* nombre tiene que valer lo que ingresamos en el valué del input */}
                {/*  */}
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>  
            </div>
            <div>
                <form>Picture</form>
                <input type="text" value={picture} onChange={(e) => setPicture(e.target.value)}/>
            </div>
            <div>
                <form>Discribe</form>
                <textarea name="" id="" cols="22" rows="15" value={discribe} onChange={(e) => setDiscribe(e.target.value)}></textarea>
            </div>
            <button type="submit">Crear an card</button>
        </form>
        
        </>
    )
}

export default CreateCharacters