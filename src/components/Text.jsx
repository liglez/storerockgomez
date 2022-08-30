import React, {useState, useEffect} from 'react'

const Text = () => {
 const [nombre, setNombre] =useState();
 const [valor, setValor] = useState(false)

const cambiarNombre = () => {
    if(nombre === 'Erick')
        setNombre('Pedro');
    else 
        setNombre('Erick')
}

const cambiarValor = () => {
    setValor(!valor);
}

useEffect(()=>{
    console.log('after render')
},[])

    console.log('before render')
  
  return (
    <div>
        <p>Escribe tu Nombre</p>
        
        <p>Mi nombre es {nombre} </p>
        {valor ? ( <h1>El valor es true</h1>) : ( <h1>El valor es false</h1>)}
        <button onClick={cambiarNombre}>Cambia tu nombre</button>
        <button onClick={cambiarValor}>Cambia valor</button>
    </div>
  )
}

export default Text