import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 0;
  function Add() {
    // counter = counter + 1;
    setCounter(counter + 1)

  }
  function Less() {
    setCounter(counter - 1)
  }
  function Reset() {
    setCounter(0)
  }
  return (
    <>
      <div className="Container">

        <h1>Counter</h1>
        <h2>Value {counter}</h2>
        <button onClick={Add}>Value</button>
        <button onClick={Less}>LessValue</button>
        <button onClick={Reset}>Reset</button>
      </div>


    </>
  )
}

export default App
