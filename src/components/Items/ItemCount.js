const { useState } = require("react");

const ItemCount = (props) => {

    const {stock, initial} = props;
    const [count, setCount] = useState(initial);
    // const [item, setItem] = useState()
    // console.log(initial);

   const Minus = () => {
    console.log('Minus')
        if(count > 0 && count >= initial )
            setCount(count-1);
   }

   const Add = () => {
    console.log('Add')
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
        </div>
    )
}

export default ItemCount;