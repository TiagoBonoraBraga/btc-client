import { HeaderStyled } from "./OrganismsStyle/Header";
import { memo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import menublue from "../../assets/menublue.png";
import menuItens from "../atoms/menuItensAdm.json";
import NavBar from "../molecules/NavBar";

// import { FiMenu } from 'react-icons/fi'

// import Logo from '../atoms/Logo'
// import NavBar from '../molecules/NavBar'

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  const location = useLocation();

  return (
    <>
      <HeaderStyled>
        <NavBar />
      </HeaderStyled>
    </>
  );
};

export default memo(Header);
