import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Red ")

  return (
    <>
      <div className="container" style={{ backgroundColor: color }}>
        <button onClick={() => setColor("White")}>White</button>
        <button onClick={() => setColor("Red")}>Red</button>
        <button onClick={() => setColor("Green")}>Green</button>
        <button onClick={() => setColor("Blue")}>Blue</button>
        <button onClick={() => setColor("Black")}>Black</button>

      </div>
    </>
  )
}

export default App
