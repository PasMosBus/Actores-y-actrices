import ShowCharacters from "../components/ShowCharacters";
import '../pages/Home.css'

const Home = () => {
    return (
        <>
            {/* <NavLink to="/create"> <button>Crear</button> </NavLink> */}
            <div className="cont">
                <button className="buttons">Crear</button>
                <ShowCharacters />
            </div>
        </>
    )
}
export default Home;