import ShowCharacters from "../components/ShowCharacters";
import '../pages/Home.css'

const Home = () => {
    return (
        <>
            <div className="cont">
                <button className="but-crear">Crear</button>
                <ShowCharacters />
            </div>
        </>
    )
}
export default Home;