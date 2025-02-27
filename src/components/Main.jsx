import { useState, useEffect } from "react"
import axios from "axios"

const apiKey = "14c4fdcb06941b3695cde2f0b3924770"

export default function Main() {

    //useEffect
    const [search, setSearch] = useState("")
    const [resultFilms, setResultFilms] = useState([])

    const [resultSeries, setResultSeries] = useState([])

    function handleSubmit() {
        event.preventDefault();

        //"https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro"
        //film
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&language=it-IT`)
            .then(res => { //console.log(res.data.results); 
                setResultFilms(res.data.results)
            })
            .catch(err => console.log(err))

        //series
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=it_IT&query=${search}`)
            .then(res => { console.log(res.data.results); 
                setResultSeries(res.data.results)
            })
            .catch(err => console.log(err))

        setSearch("")
    }

    function flag(string) {
        if (string === "it") {
            return "/Flag_of_Italy.svg"
        }
        else if (string === "en") {
            return "/Flag_of_the_United_Kingdom.svg"
        }
        else ""
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={event => setSearch(event.target.value)} placeholder="Cerca" />
                <button>Invia</button>
            </form>

            <h2>Film</h2>

            {resultFilms.map(el =>
                <ul key={el.id}>
                    <li><h3>{el.title}</h3></li>
                    <li>{el.original_title}</li>
                    <li>{<img src={flag(el.original_language)} alt={el.original_language} />}</li>
                    <li>{el.vote_average}</li>
                </ul>
            )}

            <h2>Serie</h2>

            {resultSeries.map(el =>
                <ul key={el.id}>
                    <li><h3>{el.name}</h3></li>
                    <li>{el.original_name}</li>
                    <li>{el.original_language}</li>
                    <li>{el.vote_average}</li>   
                </ul>
            )}

            {(resultFilms.length === 0 && resultSeries.length) === 0 && <div>Cerca qualcosa</div> }
        </>
    )
}