import { useState } from 'react'
import Toodo from './components/Toodo'
import Header from './components/Header'
import './App.css'


function App() {

  return (
    <div className="App">
      <Header/>
      <Toodo />
    </div>
  )
}

export default App
