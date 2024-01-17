import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink className ='link_one'to='/'>Пост</NavLink>
            </li>
            <li>
                <NavLink className='link_two' to='/create_post' >Создать пост</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar