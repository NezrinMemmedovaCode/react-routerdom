import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Home from '../pages/Home/Home'

function Main() {
  return (
  
    <>
     <Nav></Nav>

    <Outlet></Outlet>

    <Footer></Footer>
    </>
)
}

export default Main