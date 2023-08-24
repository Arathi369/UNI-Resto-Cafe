import React, { useEffect, useState } from 'react'
import "./App.css"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import { Cart } from 'react-bootstrap-icons'
import axios from 'axios'

const Nav = () => {
  const items = useSelector((state)=>state.cart)
  const [alldata,setAlldata]=useState([])
  useEffect(()=>{
   fetchData()
  })
  const fetchData=()=>{
    axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
    .then(data=>setAlldata(data.data[0]))
  }
  return (
  <>
  <nav className="navbar navbar-expand-lg bg-body-white py-3 w-100 ">
  
    <Link className="navbar-brand fw-bold fs-1">{alldata.restaurant_name}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto ">
        <li className="nav-item ">
          <Link className="nav-link" aria-current="page" to="/">My Orders</Link>
        </li>
        <div className='buttons'>
        <Link to="/cart" className='nav-link fw-bolder text-dark'><i className='fa fa-shopping-cart fs-3' ><span className="position-absolute top-5 p-1 translate-middle  bg-danger border border-light rounded-circle fs-6 text-center">{items.length}</span>
        </i></Link>
        </div>
      </ul>
    </div>

</nav>
  </>
   
  )
}

export default Nav
