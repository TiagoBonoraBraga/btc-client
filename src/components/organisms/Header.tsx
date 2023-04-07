import { HeaderBox } from './OrganismsStyle/Header'
import Logo from '../atoms/Logo'
import Logout from '../atoms/Logout'
import React from 'react'

const Header = () => {
  return (
    <HeaderBox>
      <Logo/>
      <Logout/>
    </HeaderBox>
  )
}

export default Header
