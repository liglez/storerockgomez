import React from 'react'
import { Link } from 'react-router-dom';
import s from './Item.module.css';

const Item = ({item, cartLoad, removeItem}) => {
  // const {id, title, category, price, stock, img} = props;

  // console.log(id);
 // console.log(item);

  return(
    <div className={s.card} key={item.id}>
      <img src={item.img} height='200px' width='250px' alt={item.title} />
      <div className={s.info} >
        <h2>Producto: {item.title}</h2>
        <h3>Categoria: {item.category}</h3>
        <h4>Precio: {item.price}</h4>
        { !cartLoad 
          ?  
          <div> 
              <p> Stock: {item.stock}</p>
              <Link to={`/item/${item.id}`}><button>Ver detalle</button></Link>  
            </div>
          :
          <div>
            <p>Cantidad : {item.cantidad}</p>
            <button onClick={() => {removeItem(item.id)}}> Eliminar producto</button>
          </div>
      }
        
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