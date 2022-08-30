import React from 'react'
import './main.css'
import ItemListContainer from './ItemListContainer'


const Main = (props) => {
  console.log(props)
  return (
    <main className='contenedor-main'>
        <h2> Bienvenidos </h2>
        <ItemListContainer 
          mensaje={props.mensaje} 
        />
        
    </main>
  )
}

export default Main;