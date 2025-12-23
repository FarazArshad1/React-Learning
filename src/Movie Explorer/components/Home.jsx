import { useState, useEffect, useRef, use } from 'react'
import { Link } from 'react-router-dom'
import MovieList from '../components/MovieList.jsx'

export default function Home() {
    const [movies, setMovies] = useState([])
    const [loading, setloading] = useState(false)
    const inputRef = useRef()

    const fecthMovies = async (query) => {
        setloading(true)
        const response = await fetch(`http://www.omdbapi.com/?apikey=5dfb9f87&s=${query}`)
        const data = await response.json()
        console.log(data)

        setMovies(data.Search || [])
        setloading(false)
    }

    useEffect(() => {
        fecthMovies("Avengers")
    }, [])

    const handleSearch = (event) => {
        event.preventDefault();
        const query = inputRef.current.value.trim()

        if (query) fecthMovies(query)
    }

    return (
        <div>
            <div className="home">
                <form onSubmit={handleSearch}>
                    <input ref={inputRef} className="searchInput" placeholder="Search for Link movie..." />
                    <button type="submit">Search 🔎</button>
                </form>
                {loading ? <p>Loading</p> : <MovieList movies={movies} />}

            </div>
        </div>
    )
}
