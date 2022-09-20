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

        return itemCart ? true : false;
        
    }

    // calcular el precio total y tantidad total
    const cartTotal = (option) => {
        let total =  0;
        let cantidad = 0;
        cart.forEach((item) => {
            total = total+(item.price*item.cantidad);
            cantidad = cantidad+item.cantidad;
        })

        return option ==='Total' ? total : cantidad; 
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



    
    return (
        <CartContext.Provider value={{ cart, handleCartUpdate, clearCart, removeItem, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export default CardProvider;