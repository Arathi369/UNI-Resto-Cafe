import React from 'react'
import Nav from './Nav'
import { Routes, Route } from 'react-router-dom'
import MyOrders from './MyOrders';

function Navbar() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<MyOrders/>}></Route>
      </Routes>
    </div>
  )
}

export default Navbar

