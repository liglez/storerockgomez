import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { serverTimestamp, collection, addDoc } from  'firebase/firestore'
import { db } from '../../firebaseConfig'
const Form = ({cart, total, clearCart}) => {
    // const [nombre, setNombre]  = useState('');
    // const [apellido, setApellido]  = useState('');
    const [dataForm, setDataForm] =useState({nombre:'', apellido:'',edad:0, talla:'', phone:'', email:''})
    const [compra, setCompra] = useState(false);
    const [nCompra, setNCompra] = useState();

    const handleSubmit = (event) => {

        event.preventDefault();
        // console.log(cart);
        // console.log(total('total'));
        // console.log(dataForm);
        

         const order = {
                buyer: {nombre: dataForm.nombre, apellido: dataForm.apellido, email: dataForm.email, phone: dataForm.phone},
                items: cart,
                total: total('total'),
                date: serverTimestamp()
        }
        
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
        .then((response)=>{
            console.log(response.id)
            setNCompra(response.id);
            setDataForm({...dataForm, nombre:'', apellido:'', edad:'', talla:'', phone:'', email:''})
            setCompra(true)
            clearCart();
        }).catch((error)=>{
            console.log(error)
        })
        
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setDataForm({...dataForm, [name] : value})
        console.log(dataForm);

    }

    useEffect(()=>{
        // window.addEventListener('mousemove', handleMouse);
        console.log('inicializo evento');

        return () => {   // Esta return se ejecuta primro el return y luego vuelve hacer el useEfect funcion de cleanup
             // window.removeEventListener('mousemove',handleMouse);
             console.log('borra evento despues del render')
        }
    },[]);

    
    if(compra)
        return (
            <h2>Gracias por tu compra tu id es {nCompra} </h2>
        )
    
        return (
        <div style={{marginTop:'20px'}}>
            <form action='' onSubmit={handleSubmit}>
                <input type='text' placeholder='Nombre' name='nombre' value={dataForm.nombre} onChange={handleChange} />
                <input type='text' placeholder='Apellido' name='apellido' value={dataForm.apellido}  onChange={handleChange}/>
                <input type='text' placeholder='phone' name='phone' value={dataForm.phone} onChange={handleChange} />
                <input type='text' placeholder='email' name='email' value={dataForm.email} onChange={handleChange} />
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Form;

/*
const handleChangeName = (e) => {
    // const [] =  e.target;
    console.log(e.target.value);
    setNombre(e.target.value);

}
const handleChangeLastName = (e) => {
const {name, value}=  e.target
console.log(value);
console.dir(name);
console.log(apellido)
setApellido(value);

} 
*/