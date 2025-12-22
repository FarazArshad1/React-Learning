import './movieExplorer.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function MovieExplorer() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element = {<Home/>}/>
                </Routes>
            </Router>
        </div>
    )
}
