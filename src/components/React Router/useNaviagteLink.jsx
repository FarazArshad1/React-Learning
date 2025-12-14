import { useNavigate } from 'react-router-dom'

export default function Home() {
    const naviagte = useNavigate()

    const goToApplyCSS = () => {
        naviagte("/aplly-css")
    }

    return (
        <div>
            <h2>Weclome to Home Page</h2>
            <button onClick={goToApplyCSS}>Go to Apply CSS Page</button>
        </div>
    )
}
