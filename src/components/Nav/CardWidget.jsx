import { useEffect } from "react";
import { useState } from "react";

const CardWidget =()=>{
    const [cartCount,setCartCount] = useState(0);

    useEffect(()=>{
        setCartCount(0);
    },[]);

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