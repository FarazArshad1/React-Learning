import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <Link className="logo" to="/">
                    <h2>🎬 Movie Explorer</h2>
                </Link>
                <Link to="/" data-discover="true">Home</Link>
            </nav>
        </div>
    )
}
