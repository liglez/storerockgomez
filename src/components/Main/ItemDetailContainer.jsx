// eslint-disable-next-line react-hooks/exhaustive-deps
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
//import { products } from '../../mock/products';
import ItemDetail from '../Items/ItemDetail';
import { productoDetail } from '../../mock/products';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false)

  const loadDetailProduct = () =>{
      const api = new Promise((res, rej)=>{
        setTimeout(()=>{
          res(productoDetail)
        },2000)
      });

      api.then((response)=>{
          const product = response.find((prod)=> prod.id === 2)
          setProduct(product);
          setLoading(true);
          console.log('detailproduct', response)
          console.log(loading);
      }).catch((error)=>{

      });
  }

  useEffect(()=>{

    console.log(loading);
      function loadProducts(){
        console.log('load products')

        const request = fetch('https://fakestoreapi.com/products');

        request.then((result)=>result.json())
        .then((resp)=>{ 
            console.log('result', resp) 
            // setLoading(true);
            // setProduct(productoDetail)
            setProduct(resp)

            console.log('products', resp)
          })
        .catch((error)=>{ 
          console.log(error);
        }).finally(()=>{
          // setLoading(true);
        });
      }

      loadProducts();
      loadDetailProduct();
  },[]);
  return (
    <>
      <div>ItemDetailCointainer</div>
      { !loading ? <h1>cargando productos</h1> : <ItemDetail product={product}/> }
    </> 
  )
}

export default ItemDetailContainer