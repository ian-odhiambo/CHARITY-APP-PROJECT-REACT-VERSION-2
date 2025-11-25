import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../COMPONENTS/Header'
import Footer from '../COMPONENTS/Footer'


const MainLayOut = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default MainLayOut