import React from 'react'
import Navbar from '../Pages/Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer'

const Mainlayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Mainlayout
