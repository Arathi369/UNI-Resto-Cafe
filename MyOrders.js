import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import {add,remove} from "./cartSlice"
import { increment,decrement } from './counterSlice';
import "./Style.css"
import { useParams } from 'react-router-dom';

const MyOrders = () => {
  const dispatch =useDispatch();
  const {dish_id}=useParams()
  const [menuitems, setMenuitems] = useState([])
  const [avlable,setAvlable]=useState([])
  const [index, setIndex] = useState(" ")
  const count=useSelector((state)=>state.counter.value)
  const [cart,setCart]=useState([])

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = async () => {
    await axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
      .then(data => setMenuitems(data.data[0].table_menu_list))


  }

  const handleClick = (index) => {
    setIndex(index)
  }

  const addTocart=(c)=>{
    dispatch(add(c.dish_id))
    dispatch(increment(dish_id))
  }

  const deleteFromcart=(c)=>{
    dispatch(remove(c))
    dispatch(decrement(dish_id))
  }
  
  


  return (
    <div>
      {menuitems.map((m, index) => {      
        return (
          <>
          <div id="menuslides">
            <div className="menu-slides fs-3 w-100" onClick={() => handleClick(index)} >
              <a className="nav-link" href="#">{m.menu_category}</a>
            </div>
          </div>
            
          </>
        )
      })}

      <div id="items-container" >
        {menuitems[index]?.category_dishes?.map(c => {
          return (
            <div id="dishitems" key={c.dish_id}>
              <h1 className='fs-5' >{c.dish_name}</h1>
              <p>{c.dish_currency}</p>
              <p>{c.dish_description}</p>
              <div id="dish-calory">
              <p id='calories'>{c.dish_calories}</p>
              </div>
              <div ><img src={c.dish_image}  width={150} height={150} id='dishimages'></img></div>
              
              <div className="btn-group border-none " role="group"  id="buttongroup">
                <button type="button" className="btn btn-success" onClick={()=>deleteFromcart(c)}>-</button>
                <button type="button" className="btn btn-success">{count}</button>
                <button type="button" className="btn btn-success" onClick={()=>addTocart(c)}>+</button>
              </div>
            </div>
            
          )
          
        })}

      </div>

    </div>


  )
}

export default MyOrders
