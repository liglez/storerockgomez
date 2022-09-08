import React  from 'react'
import './main.css'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
// import Text from '../Text'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Cart/Cart'


const Main = (props) => {
  
  // const [test] = useState(false)
  // setTest(false)
  console.log(props)

  return (
    <main className='contenedor-main'>
        <h2> Bienvenidos </h2>
        <Routes>
          <Route 
            path='/' 
            element={<ItemListContainer  mensaje="Listado Productos"  />}
          />
          <Route 
            path='/category/:category' 
            element={<ItemListContainer  />}
          />          
          <Route 
            path='/item/:itemID'
            element={<ItemDetailContainer />}
          />
           <Route
            path='/cart'
            element={<Cart />}
          />
        </Routes>
    </main>
  )
}

export default Main;