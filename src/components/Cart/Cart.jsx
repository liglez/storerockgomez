import React from 'react'
import { useEffect } from 'react'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import Item from '../Items/Item';
import { useState } from 'react';

const Cart = () => {

  const {cart,clearCart, removeItem } = useContext(CartContext);
  const [cartLoad, setCarLoad] = useState(true)

  useEffect(()=>{
      console.log(cart.length);
  },[]);

  if (cart.length > 0 ) {
    return (
      <div style={{display: 'flex', justifyContent:'center'}} >
          <div>
            { 
              cart.map((item)=>{
                console.log(item);
                  return <Item key={item.id}
                              item={item}
                              cartLoad={cartLoad}
                              removeItem={removeItem}
                          />
              })
          }
          </div>
          <div><button onClick={clearCart}> Limpiar carrito</button></div>        
      </div>
    )
  }
  else{
    return (
      <div style={{display: 'flex', justifyContent:'center'}} >Carrito Vacio</div>
    )

  }
  
}

export default Cart