import React, { useState, useEffect } from 'react';
import Order from './Order.jsx';
// import { FaSkype } from "react-icons / fa" ;  
import { FaShoppingCart } from "react-icons/fa";


const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (
    <div>
    
      {props.orders.map(el => (
    <Order onDel={props.onDel} key={el.id} thing={el} />
  ))}
  <p className='sum1'>Summa: 
    <span className='sum2'> {new Intl.NumberFormat().format(summa)} $</span></p>
  </div>)
}
const showNothing = () => {
  return (
    <div className='empty'> 
      <h2>Empty shopping cart</h2>
    </div>)
}

export default function Header(props) {
  let [cartChange, setCartChange] = useState(false);
 
return (
    <header>
    <div>
        <span className='logo'>Bookcase</span>
        <ul className='contact'>
            <li>About Us</li>
            <li>Contacts</li>
            <li>Cabinet</li>
       </ul>
  <FaShoppingCart onClick={() => setCartChange(cartChange = !cartChange)} className={`cart ${cartChange && 'active'}`} />
          
    {cartChange && (
<div className='shop-cart'>
    {props.orders.length > 0 
    ? showOrders(props)
    : showNothing() }
  </div>
    )}
    </div>
      
       <div className='presenteshion'></div>
    </header>
  )
}