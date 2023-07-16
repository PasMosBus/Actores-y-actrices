

/* const EditCharacters = () => {
    return (
        <p>Edit Character</p>
    )
}

export default EditCharacters */

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './EditCharacters.css'

const EditCharacters = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const [discribe, setDescription] = useState("");

    useEffect(() => {
        fetchCharacter();
    }, []);

    const fetchCharacter = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/characters/${id}`);
            const { name, picture, discribe } = response.data;
            setName(name);
            setPicture(picture);
            setDescription(discribe);
        } catch (error) {
            console.error(error);
        }
    };

    const updateCharacter = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/characters/${id}`, {
                name,
                picture,
                discribe,
            });
            alert("Character updated successfully");
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container-edit">
            <h3>Edit Character</h3>
            <form onSubmit={updateCharacter}>
                <div>
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
                <button className="buttons" type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditCharacters;