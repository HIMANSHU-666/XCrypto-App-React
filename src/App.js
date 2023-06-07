import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Coins from './components/Coins'
import Exchanges from './components/Exchanges'
import CoinDetails from './components/CoinDetails'
import {useMediaQuery} from "@chakra-ui/react"
import NHeader from './components/NHeader'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import "./app.css"
import Footer from './components/Footer'


const App = () => {
  const [inPhone] = useMediaQuery("(max-width: 400px)");
  return (
    <>
      <Router>
        {inPhone ? <NHeader/> : <Header/>}
        <ColorModeSwitcher/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/coins' element={<Coins/>} />
          <Route path='/exchange' element={<Exchanges/>} />
          <Route path='/coin/:id' element={<CoinDetails/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
