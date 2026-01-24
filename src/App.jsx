import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Parent from './components/UseContext/UseContext'
import ChangeThemeColor from './components/UseContext/ChangeThemeColor'

function App() {

  return (
    <div>
      <ChangeThemeColor />
      <Parent />
    </div>
  )
}

export default App
