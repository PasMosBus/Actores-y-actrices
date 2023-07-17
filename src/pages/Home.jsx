import ShowCharacters from "../components/ShowCharacters";
import '../pages/Home.css'

const Home = () => {
    return (
        <>
            <div className="box">
                <button className="buttons">Create</button>
                {/* <NavLink to="/create"> <button>Create</button> </NavLink> */}
                <div className="cont">
                    <ShowCharacters />
                </div>
            </div>

        </>
    )
}
export default Home;