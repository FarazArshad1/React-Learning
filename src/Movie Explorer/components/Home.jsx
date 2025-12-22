import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import MovieList from '../components/MovieList.jsx'

export default function Home() {
    return (
        <div>
            <div className="home">
                <form>
                    <input className="searchInput" placeholder="Search for Link movie..." />
                    <button type="submit">Search 🔎</button>
                </form>
                <MovieList />
            </div>
        </div>
    )
}
