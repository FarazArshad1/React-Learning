import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom'

import SimpleForm from './components/Form Handling/Controlled Component/SimpleForm'
import ApplyCSS from './components/CSS/applyCSS'
import ApplyArray from './components/Array/applyArray'
import Users from './components/UseEffect Hooks/Users'
import NotFound from './components/React Router/NotFound'
import Home from './components/React Router/useNaviagteLink'
import Products from './components/React Router/Products'
import Phones from './components/React Router/Products/Phones'
import Laptops from './components/React Router/Products/Laptops'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/simple-form">Simple Form</Link> |
        <Link to="/aplly-css">Apply CSS</Link> |
        <Link to="/apply-array">Apply Array</Link> |
        <Link to="/user/10">User</Link> |
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simple-form" element={<SimpleForm />} />
        <Route path="/aplly-css" element={< ApplyCSS />} />
        <Route path="/apply-array" element={<ApplyArray />} />
        <Route path="/user/:id" element={<Users />} />
        <Route path="/products" element={<Products />}>
          <Route path='phone' element={<Phones />} />
          <Route path='laptop' element={<Laptops />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
