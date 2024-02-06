import { useState } from 'react'
import './App.css'
import Home from './Home'
import Header from './Header'
import Sidebar from './Sidebar'

function App() {

  return (
 <div className='grid-container'>
  <Header />
  <Sidebar />
  <Home />
 </div>
  )
}

export default App
