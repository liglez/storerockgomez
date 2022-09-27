
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../../mock/products';
import ItemDetail from '../Items/ItemDetail';
import { productoDetail } from '../../mock/products';
import { collection, getDoc, doc} from 'firebase/firestore';
import { db } from "../../firebaseConfig";


const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false)
  const { itemID } = useParams();

  const itemIDNumber = Number(itemID);

  // console.log('ItemID', itemID);

  const loadDetailProduct = () =>{
      const itemCollection = collection(db,'productos');
      const q = doc(itemCollection, itemID);
      console.log(itemID);
      console.log(q);

      getDoc(q).then((resp)=>{
        console.log(resp.data());
        setProduct({
            id: resp.id,
            ...resp.data()
        })
      }).catch((error)=>{
        console.log(error);
      }).finally(()=>{
        setLoading(true);
      });

  }

  useEffect(()=>{
      loadDetailProduct();
      // eslint-disable-next-line 
  },[]);
  return (
    <>
      <div>ItemDetailCointainer</div>
      { !loading ? <h1>cargando productos</h1> : <ItemDetail product={product}/> }
    </> 
  )
}

export default ItemDetailContainer


/*
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../../mock/products';
import ItemDetail from '../Items/ItemDetail';
import { productoDetail } from '../../mock/products';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false)

  const { itemID } = useParams();

  const itemIDNumber = Number(itemID);

  // console.log('ItemID', itemID);

  const loadDetailProduct = () =>{
      const api = new Promise((res, rej)=>{
        
        const filterProduct = products.find((prod)=> prod.id === itemIDNumber);

        setTimeout(()=>{
          res(filterProduct ? filterProduct : productoDetail)
        },1000)
      });

      api.then((response)=>{
          setProduct(response);
          setLoading(true);
      }).catch((error)=>{
          console.log(error)
      });
  }

  useEffect(()=>{
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


/*
    console.log(loading);
      function loadProducts(){
        console.log('load products')

        const request = fetch('https://fakestoreapi.com/products');

        request.then((result)=>result.json())
        .then((resp)=>{ 
            console.log('result', resp) 
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
    */