import React from 'react'
import { Link } from 'react-router-dom';
import s from './Item.module.css';

const Item = ({item}) => {
  // const {id, title, category, price, stock, img} = props;

  // console.log(id);

  return(
    <div className={s.card} key={item.id}>
      <img src={item.img} height='200px' width='250px' alt={item.title} />
      <div className={s.info} >
        <h2>{item.title}</h2>
        <h3>{item.category}</h3>
        <h4>{item.price}</h4>
        <p>{item.stock}</p>
        <Link to={`/item/${item.id}`}>
          <button>Ver detalle</button>
        </Link>          
      </div>      
  </div>
  );
}

export default Item

/* return (
  <div className={s.card} key={id}>
      <img src={img} height='200px' width='250px' alt={title} />
      <div className={s.info} >
        <h2>{title}</h2>
        <h3>{category}</h3>
        <h4>{price}</h4>
        <p>{stock}</p>
        <Link><button>Ver detalle</button></Link>          
      </div>
  </div>
) */