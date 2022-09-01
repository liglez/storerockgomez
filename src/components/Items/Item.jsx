import React from 'react'

const Item = (props) => {
  const {id, title, category, price, stock, img} = props;

  return (
    <div key={id} >
        <img src={img} height='200px' width='250px' />
        <p>{title}</p>
        <h5>{price}</h5>
    </div>
  )
}

export default Item