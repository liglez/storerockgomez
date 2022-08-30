import React from 'react'
import './main.css'
import ItemListContainer from './ItemListContainer'
import Text from '../Text'


const Main = (props) => {
  console.log(props)
  return (
    <main className='contenedor-main'>
        <h2> Bienvenidos </h2>
        <ItemListContainer 
          mensaje={props.mensaje} 
        />
        <Text />
        
    </main>
  )
}

export default Main;