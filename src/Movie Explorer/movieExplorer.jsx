import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import MovieDetail from './components/MovieDetail.jsx'
import './movieExplorer.css'

export default function MovieExplorer() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:movieId" element={<MovieDetail />} />
                </Routes>
            </Router>
        </div>
    )
}
