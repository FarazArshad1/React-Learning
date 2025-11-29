import Hello from './components/CSS/applyCSS'
import Students from './components/Props/ArrayAsProps'
import './App.css'

function App() {

  return (
    <>
      <Hello />
      <Students name="Faraz" age={25} city="Lahore" subjects={['Math', 'Physics', 'Chemistry']} />
    </>
  )
}

export default App
