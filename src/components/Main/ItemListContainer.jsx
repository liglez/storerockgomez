import { useState } from "react";
import ItemCount from "../Items/ItemCount";

const ItemListContainer = (props) => {
        console.log(props)

        const [stock, setStock] = useState(20);

        const onAdd =(quan) =>{
                alert("Se agrego la mercancia al carrito")
                setStock(stock-quan);
           }        

        return(
                <div>
                    {props.mensaje}
                    <ItemCount 
                        stock={stock}
                        initial={0}
                        onAdd={onAdd}
                        />
                </div>
        )
}

export default ItemListContainer;
