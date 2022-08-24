import React from 'react'
import CardWidget from './CardWidget';

const Nav = () => {
  return (
    <nav className='menu'>
        <ul className='menu-list'>
            <li className='option'><a href="https://google.com">Productos</a></li>
            <li className='option'><a href="https://google.com">Nosotros</a></li>
            <li className='option'><a href="https://google.com">Contacto</a></li>
        </ul>
      <CardWidget />
    </nav>
  )
}

export default Nav;