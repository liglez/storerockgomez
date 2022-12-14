const { useState } = require("react");

const ItemCount = (props) => {

    const {stock, initial, onAdd} = props;
    const [count, setCount] = useState(initial ? initial : 0);
    // const [item, setItem] = useState()
    // console.log(initial);n

   const Minus = () => {
    // console.log('Minus')
        if(count > 0 && count >= initial )
            setCount(count-1);
   }

   const Add = () => {
     console.log('Add')
     console.log(initial);
     console.log(count);
        if(stock > initial && count < stock) {
            setCount(count+1);
        }
   }
  
    return(
        <div>
            <button onClick={()=> Minus()}>-</button>
            <button onClick={()=> Add()}>+</button>
            <p>Cantidad: {count}</p>
            <p>Stock: {stock}</p>
            <p>initial: {initial}</p>
            <button disabled={count === 0} onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;