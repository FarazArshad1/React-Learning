import { useParams } from "react-router-dom"
import { useState, useEffect, use } from "react"

export default function MovieDetail() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        async function fetchMovieDetails() {
            const response = await fetch(`http://www.omdbapi.com/?apikey=5dfb9f87&i=${movieId}`)
            const data = await response.json()
            setMovie(data)
        }

        fetchMovieDetails()
    }, [movieId])


    if (!movie) {
        return <p>Loading movie details...</p>
    }

    return (
        <div className="movie-detail">
            <h2>{movie.Title}</h2>
            <img alt={movie.Title} src={movie.Poster} />
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Released:</strong>{movie.Released}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
        </div>
    )
}
