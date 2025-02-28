import Card from "./Card";

//import GlobalContext
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function Main() {

    //import useState
    const { resultFilms, resultSeries } = useContext(GlobalContext)

    return (
        <main>

            <h2>Film</h2>

            <div className="list">
                {resultFilms.map(el =>
                    <Card key={el.id} el={el} />
                )}
            </div>

            <h2>Serie</h2>

            <div className="list">
                {resultSeries.map(el =>
                    <Card key={el.id} el={el} />
                )}
            </div>

            {(resultFilms.length === 0 && resultSeries.length) === 0 && <div>Cerca qualcosa</div>}
        </main >
    )
}