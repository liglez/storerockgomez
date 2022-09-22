import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemsList from "../Items/ItemList";
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from "../../firebaseConfig";


const ItemListContainer = (props) => {
        console.log(props)

        const [items, setItems] = useState([]);
        const [loaded, setLoaded ] =useState(false);
        const {category} = useParams();
        

        useEffect(()=>{
                const itemCollection = collection(db, 'productos');
                let q = {};

                if ( category !== undefined && category !== '')
                        q = query(itemCollection, where('category','==',category));
                else 
                        q= itemCollection;
        
                
                getDocs(q).then((response)=>{
                        const products = response.docs.map((prod) => { 
                        
                                return {
                                        id: prod.id,
                                        ...prod.data(),
                                        };
                                });
                        
                        setItems(products);
                        
                }).catch((error)=>{
                        console.log(error)
                }).finally(()=>{
                        setLoaded(true);
                });
                
        },[category]);

        if(!loaded)
                return('wait a moment please');

        return(
                <div>
                    <h2>{props.mensaje}</h2>
                    <ItemsList
                        items={items}
                    />
                </div>
        )
}

export default ItemListContainer;


/* 
const task = new Promise((res,rej)=>{
                        setTimeout(()=>{
                                res(products)
                        },1000)                
                });
                
                task.then((response)=>{
                        console.log(response);

                       
                }).catch((error)=>{
                        console.log(error)
                }).finally(()=>{
                        console.log('finally')
                });
*/