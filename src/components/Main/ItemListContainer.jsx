import { useEffect, useState } from "react";
import ItemCount from "../Items/ItemCount";
import ItemsList from "../Items/ItemList";
import { products } from "../../mock/products";

const ItemListContainer = (props) => {
        console.log(props)

        const [stock, setStock] = useState(20);
        const [items, setItems] = useState([]);

        const onAdd =(quan) =>{
                alert("Se agrego la mercancia al carrito")
                setStock(stock-quan);
           }        
               
        
        useEffect(()=>{
                const task = new Promise((res,rej)=>{
                        setTimeout(()=>{
                                res(products)
                        },2000)                
                });
                
                task.then((response)=>{
                        console.log(response);
                        setItems(response);
                        //setItems(r)
                }).catch((error)=>{

                        console.log('Error', error);

                }).finally((always)=>{

                        console.log('Finally',always)
                });
        },[]);

        return(
                <div>
                    <h2>{props.mensaje}</h2>
                    <ItemsList
                        items={items}
                    />
                </div>
        )
}

export default ItemListContainer;
