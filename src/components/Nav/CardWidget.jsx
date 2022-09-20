import { useEffect } from "react";
import { useState } from "react";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CardWidget =()=>{

    const {cart, cartTotal} = useContext(CartContext);

    const [cartCount,setCartCount] = useState(0);

    useEffect(()=>{
        setCartCount(cartTotal('cantidad'));
    },[cart]);

    return (
        <>
            <span className="material-symbols-outlined">shopping_cart</span>
           { cart.length > 0 &&
            <div>{cartCount}</div>
            }
           
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