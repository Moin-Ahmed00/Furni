import React from 'react'
import Appbar from './Components/Appbar'
import './App.css'
import Home from './Components/Home'
import Products from './Components/Products'
import ChooseUs from './Components/ChooseUs'
import ModernDesign from './Components/ModernDesign'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className='container-fluid bg-success h-100 m-0 p-0'>
      <Appbar></Appbar>
      <Home></Home>
      <Products></Products>
      <ChooseUs></ChooseUs>
      <ModernDesign></ModernDesign>
      <Footer></Footer>
    </div>
  )
}

export default App
