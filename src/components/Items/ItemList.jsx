import React, { useEffect } from 'react'
import Item from './Item'


const ItemsList = (props) => {
    const {items} =props;
    
    useEffect(()=>{
       // console.log(items);

    },[items]);
    
    
  return (
    <>
        <div>ItemsList</div>
        {
            items.map((item)=>{
                return <Item key={item.id}
                            item={item}
                        />
            })
        }
    </>
  )
}

export default ItemsList