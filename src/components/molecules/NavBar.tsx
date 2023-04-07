import Logo from '../atoms/Logo'
import { NavBarBox } from './MoleculesStyle/NavBar'
import React from 'react'

const NavBar = () => {
  return (
    <NavBarBox>
      <Logo/>
      <ul>
        <li>Receita</li>
        <li>Clientes</li>
        <li>Produtos</li>
        <li>Suporte</li>
      </ul>      
    </NavBarBox>
  )
}

export default NavBar
