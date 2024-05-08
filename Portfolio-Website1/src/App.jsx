import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className='max-w-[80%] items-center mx-auto'>
        <Navbar />
        <Home />
      </div>
      <Footer />
    </>
  )
}

