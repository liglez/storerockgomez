import React, { useState } from 'react'
import './main.css'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Text from '../Text'


const Main = (props) => {
  
  const [test] = useState(false)
  // setTest(false)
  console.log(props)

  return (
    <main className='contenedor-main'>
        <h2> Bienvenidos </h2>
        <ItemListContainer 
          mensaje="Mensaje de bienvenida"
        />
        { test && (
            <Text />
        ) }
        
        <ItemDetailContainer />
        
    </main>
  )
}

export default Main;