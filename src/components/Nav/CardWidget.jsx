import { useEffect } from "react";
import { useState } from "react";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CardWidget =()=>{

    const {cart} = useContext(CartContext);

    const [cartCount,setCartCount] = useState(0);

    useEffect(()=>{
        // console.log(cart.length)
        setCartCount(cart.length);
    },[cart]);

    return (
        <>
            <span className="material-symbols-outlined">shopping_cart</span>
            <div>{cartCount}</div>
        </>
    )
}

export default CardWidget;

/*
<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
</style>

*/