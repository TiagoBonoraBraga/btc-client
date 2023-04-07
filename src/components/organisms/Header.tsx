import { HeaderBox } from './OrganismsStyle/Header'
import Logo from '../atoms/Logo'
import Logout from '../atoms/Logout'
import NavBar from '../molecules/NavBar'
import React from 'react'

const Header = () => {
  return (
    <HeaderBox>
      
      <NavBar/>
      <Logout/>
    </HeaderBox>
  )
}

export default Header
