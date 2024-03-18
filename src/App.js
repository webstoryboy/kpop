import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Country from './pages/Country'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/country" element={<Country />}></Route>
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App