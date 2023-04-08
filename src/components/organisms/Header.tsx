import { HeaderStyled, LogoStyled, MenuContentStyled, MenuIconStyled, MenuStyled } from './OrganismsStyle/Header'
import { memo, useState } from 'react';

import logo from '../../assets/logo.png';
import menublue from '../../assets/menublue.png';

// import { FiMenu } from 'react-icons/fi'



// import Logo from '../atoms/Logo'
// import NavBar from '../molecules/NavBar'


const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const toggleMenu = () => {
    setShow(!show);
  }

  return (
    <HeaderStyled>

      <LogoStyled>
        <a href='#'>
          <img src={logo} alt="logo" width="150px"/>
        </a>
      </LogoStyled>

      <MenuContentStyled>
        <MenuIconStyled src={menublue} width="40px" onClick={toggleMenu}/>              
      </MenuContentStyled>

      <MenuStyled show={show}>
        <li>
          <a href="#">Receita</a>
        </li>
        <li>
          <a href="#">Clientes</a>
        </li>
        <li>
          <a href="#">Produtos</a>
        </li>
        <li>
          <a href="#">Suporte</a>
        </li>
        <li>
          <a href="#">Sair</a>
        </li>
      </MenuStyled>
    </HeaderStyled>
  )
}

export default memo(Header)
