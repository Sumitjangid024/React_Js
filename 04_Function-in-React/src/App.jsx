import { useState } from 'react'
import './App.css'
// import Navbar from './Compoent/Navbar'
import Product from './Compoent/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Product />
    </div>
  )
}

export default App
