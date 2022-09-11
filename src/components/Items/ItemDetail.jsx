import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = (props) => {

  const {  title, price, id, img, stock } = props.product;
  const {  handleCartUpdate } = useContext(CartContext)

  const [cantidad, setCantidad] = useState(0);

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    // console.log('on add', cantidad); 
    handleCartUpdate(props.product, cantidad);

  }

  // console.log(cart);

  useEffect(()=>{
    // console.log(handleCartUpdate);

  },[]);

  return (
        <>
            <div key={id}>
                <img src={img} width='400px' alt={title} />
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non odio lobortis,
                   congue dolor nec, vulputate diam. Interdum et malesuada fames a
                   c ante ipsum primis in faucibus. Proin ante diam, efficitur vel leo eu, iaculis
                    commodo felis. Sed vel finibus ex, semper imperdiet purus. Sed eget dui ac velit 
                    euismod molestie. Maecenas eget pharetra enim. Nullam ullamcorper scelerisque lacus!
                </p>
                <h4>{price}</h4>
                { cantidad > 0 
                  ?   <Link to='/cart'> Ir al Carrito</Link>
                  :  <ItemCount stock={stock-cantidad} initial={0} onAdd={onAdd} />
                }                               
            </div>
        </>
  )
}

export default ItemDetail