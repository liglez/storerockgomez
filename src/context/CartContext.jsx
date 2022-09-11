import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CardProvider = ({children}) => {

    const [cart,setCart] = useState([]);

    // isInCart Funcion para ver si el producto esta en el carrito
    function IsInCart(id){

        const itemCart = cart.find(
			(item) => item.id === id
		  );
        console.log(itemCart);

        if(itemCart) 
            return true;
        else
            return false;
        
    }

    // Actualizo el carrito de compra -  addItem(item, quantity)
    const handleCartUpdate = (item, cant)=> {

        if(!IsInCart(item.id))
            setCart([...cart,{...item, cantidad: cant}]);
        else {
            const items = cart.map((i) => {
                if (i.id === item.id) {
                        i.cantidad = i.cantidad + cant
                }
                return i;
            });

            setCart(items);            
        }            
    };

    // Vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Eliminar un solo producto
    const removeItem = (id) => {
        const cartFilter = cart.filter(item => item.id !== id)
        setCart(cartFilter)
    }

    // calcular el precio total


    
    return (
        <CartContext.Provider value={{ cart, handleCartUpdate, clearCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}

export default CardProvider;