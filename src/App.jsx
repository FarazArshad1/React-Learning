import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartPage from './ShoppingCart/pages/CartPage'
import Home from './ShoppingCart/pages/Home'
import NavBar from './ShoppingCart/components/NavBar'
import { CartProvider } from './ShoppingCart/context/CartContext'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />}> </Route>
          <Route path="/cart" element={<CartPage />}> </Route>

        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
