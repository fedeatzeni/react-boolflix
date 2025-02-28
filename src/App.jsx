import Main from "./components/Main"
import Header from "./components/Header"

import GlobalContext from "./contexts/GlobalContext"

import { useState, useEffect } from "react"
import axios from "axios"

const apiKey = "14c4fdcb06941b3695cde2f0b3924770"

function App() {

	//useEffect
	const [search, setSearch] = useState("")
	const [resultFilms, setResultFilms] = useState([])

	const [resultSeries, setResultSeries] = useState([])

	function handleSubmit() {
		event.preventDefault();

		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&language=it-IT`)
			.then(res => {
				//console.log(res.data.results);
				setResultFilms(res.data.results)
			})
			.catch(err => console.log(err))

		//series
		axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=it_IT&query=${search}`)
			.then(res => {
				//console.log(res.data.results);
				setResultSeries(res.data.results)
			})
			.catch(err => console.log(err))

		setSearch("")
	}

	return (
		<>
			<GlobalContext.Provider value={{ resultFilms, resultSeries }}>
				<Header onSubmit={handleSubmit} value={search} onChange={event => setSearch(event.target.value)} />
				<Main />
			</GlobalContext.Provider>
		</>
	)
}

export default App
