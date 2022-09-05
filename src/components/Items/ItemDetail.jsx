import React from 'react'

const ItemDetail = (props) => {

  const {  title, price, id, img, stock } = props.product;
  return (
        <>
            <div key={id}>
                <img src={img} width='400px' />
                <p>{title}</p>
                <h5>{stock}</h5>
                <h4>{price}</h4>
            </div>
        </>
  )
}

export default ItemDetail