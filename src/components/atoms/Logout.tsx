import { LogoutBox } from './AtomsStyles/Logout'
import {MdLogout} from 'react-icons/md'
import React from 'react'

const Logout = () => {
  return (
    <LogoutBox>
      <MdLogout color="#2D9BF0" size={30}/>
    </LogoutBox>
  )
}

export default Logout
