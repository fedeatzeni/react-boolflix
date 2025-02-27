import { useState, useEffect } from "react"
import axios from "axios"

const apiKey = "14c4fdcb06941b3695cde2f0b3924770"

export default function Main() {

    //useEffect
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([])

    function handleSubmit() {
        event.preventDefault();

        //"https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro"

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&language=it-IT`)
            .then(res => { //console.log(res.data.results); 
                setResult(res.data.results) })
            .catch(err => console.log(err))

        setSearch("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={event => setSearch(event.target.value)} placeholder="Cerca" />
                <button>Invia</button>
            </form>

            <h2>Film</h2>

            {result.length === 0 && <div>Cerca qualcosa</div>}

            {result.map(el =>
                <ul key={el.id}>
                    <li><h3>{el.title}</h3></li>
                    <li>{el.original_title}</li>
                    <li>{el.original_language}</li>
                    <li>{el.vote_average}</li>
                </ul>
            )}
        </>
    )
}