export default function Card(props) {

    const { el } = props

    //flags
    function flag(string) {
        if (string === "it") {
            return "/Flag_of_Italy.svg"
        }
        else if (string === "en") {
            return "/Flag_of_the_United_Kingdom.svg"
        }
        else ""
    }

    //stars
    function stars(vote) {
        vote = Math.ceil(vote) / 2;
        let list = [];

        for (let i = 0; i < vote; i++) {
            list.push(i)
        }

        return list.map(el => <i className="fa-solid fa-star"></i>)
    }

    //title or name
    const Title = el.title !== undefined ? el.title : el.name;
    const originalTitle = el.original_title !== undefined ? el.original_title : el.original_name;

    return (
        <div className="card">
            <img src={"https://image.tmdb.org/t/p/" + "w342" + el.poster_path} alt={""} />
            <ul>
                <li><strong>Titolo:</strong>{Title}</li>
                <li><strong>Titolo Originale:</strong>{originalTitle}</li>
                <li><strong>Lingua Originale:</strong>{<img src={flag(el.original_language)} alt={el.original_language} />}</li>
                <li><strong>Voto:</strong>{el.vote_average !== 0 ? stars(el.vote_average) : "nessuna valutazione"}</li>
                <li><strong>Overview:</strong>{el.overview}</li>
            </ul>
        </div>
    )
}