import React from 'react'
import { useEffect } from 'react'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import Item from '../Items/Item';

const Cart = () => {

  const {cart,clearCart, removeItem, cartTotal } = useContext(CartContext);

  useEffect(()=>{

  },[]);

  if (cart.length > 0 ) {
    return (
      <div style={{display: 'flex', justifyContent:'center', flexDirection:'column'}} >
            { 
            
            cart.map((item)=>{
                                // cantidad = cantidad + item.cantidad;
                  return ( 
                  <div key={item.id} style={{border: '1px solid black', borderRadius:'8px', display:'flex', padding:'8px', justifyContent:'space-around', margin:'5px'}}> 
                      <h3>Product: {item.title}</h3>
                      <h3>Cantidad: {item.cantidad}</h3>
                      <h3>Precio: {item.price}</h3>
                      <button onClick={()=>{ removeItem(item.id)}}>remove</button>
                  </div> 
                  )
              })}
          <div>
            <button onClick={clearCart}> Limpiar carrito</button>
            <h3>Cantidad: {cartTotal('Cantidad')}</h3>
            <h3>Total: $ {cartTotal('Total')} </h3>
          </div>        
      </div>
    )
  }
  else{
    return (
      <div style={{display: 'flex', justifyContent:'center'}} >
        <h2>Carrito Vacio</h2>
        <Link to='/'>Regresar</Link>
        </div>
    )
  }
  
}

export default Cart;
