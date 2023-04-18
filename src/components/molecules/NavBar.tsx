import React, { useState } from "react";
import menuItens from "../atoms/menuItensAdm.json";
import { useLocation } from "react-router-dom";
import {
  HeaderStyled,
  LinkStyle,
  LogoStyled,
  MenuContentStyled,
  MenuIconStyled,
  MenuStyled,
} from "./MoleculesStyle/NavBar";
import menublue from "../../assets/menublue.png";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [show, setShow] = useState<boolean>(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  const location = useLocation();

  return (
    <HeaderStyled>
      <LogoStyled>
        <a href="#">
          <img src={logo} alt="logo" width="150px" />
        </a>
      </LogoStyled>
      <MenuContentStyled>
        <MenuIconStyled src={menublue} width="40px" onClick={toggleMenu} />
      </MenuContentStyled>

      <MenuStyled show={show}>
        {menuItens.map((item) => (
          <li key={item.id}>
            <LinkStyle
              to={item.url}
              show={show}
              className={location.pathname === item.url ? "active" : ""}
            >
              {item.text}
            </LinkStyle>
          </li>
        ))}
      </MenuStyled>
    </HeaderStyled>
  );
};

export default NavBar;
