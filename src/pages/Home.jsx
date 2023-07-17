import ShowCharacters from "../components/ShowCharacters";
import '../pages/Home.css'
import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div className="box">
                
                <NavLink to="/create"> <button className="buttons">Create</button> </NavLink>
                <div className="cont">
                    <ShowCharacters />
                </div>
            </div>

        </>
    )
}
export default Home;