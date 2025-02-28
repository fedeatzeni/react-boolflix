import Card from "./Card";

//import GlobalContext
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function Main() {

    //import useState
    const { resultFilms, resultSeries } = useContext(GlobalContext)

    return (
        <>

            <h2>Film</h2>

            {resultFilms.map(el =>
                <Card key={el.id} el={el} />
            )}

            <h2>Serie</h2>

            {resultSeries.map(el =>
                <Card key={el.id} el={el} />
            )}

            {(resultFilms.length === 0 && resultSeries.length) === 0 && <div>Cerca qualcosa</div>}
        </>
    )
}