import React from 'react'

const Item = (props) => {
  const {id, title, category, price, stock, img} = props;

  console.log(id);

  return (
    <div key={id} >
        <img src={img} height='200px' width='250px' alt={title} />
        <p>{title}</p>
        <p>{category}</p>
        <p>{stock}</p>
        <h5>{price}</h5>
    </div>
  )
}

export default Item