import { Link } from "react-router-dom"

function MovieCard() {
    return (
        <div>
            <div className="movie-card">
                <img alt="The Avengers" src="https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg" />
                <h3>The Avengers</h3>
                <p>2012</p>
                <Link to="movie-detail.html" data-discover="true">Details</Link>
            </div>
        </div>
    )
}

export default MovieCard
