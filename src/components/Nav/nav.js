import React from 'react'
import { Link } from 'react-router-dom';
import CardWidget from './CardWidget';
import s from './Nav.module.css';

const Nav = ({isInHedaer}) => {
  console.log(s)

  return (
    <nav className={isInHedaer ? s.nav : 'bottom' }>
        <ul className='menu-list'>
              <Link to='/'>Home</Link>
              <Link to='/category/camisas'>Camisas</Link>
              <Link to={`/category/gorras`}>Gorras</Link>
              <Link to='/category/zapatos'>Zapatos</Link>
        </ul>
        <Link to='/cart'>
          <CardWidget />
        </Link>
    </nav>
  )
}

export default Nav;