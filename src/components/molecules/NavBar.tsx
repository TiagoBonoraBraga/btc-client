import {
  HeaderStyled,
  LinkStyle,
  LogoStyled,
  MenuContentStyled,
  MenuIconStyled,
  MenuStyled,
} from "./MoleculesStyle/NavBar";
import React, { useState } from "react";

import logo from "../../assets/logohyperdashmenor.png";
import menuItensAdmin from "../atoms/menuItensAdm.json";
import menuItensUser from "../atoms/menuItensUser.json";
import menublue from "../../assets/menublue.png";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(true); // Muda cfe. login

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
        {isAdmin
          ? menuItensAdmin.map((item) => (
              <li key={item.id}>
                <LinkStyle
                  to={item.url}
                  show={show}
                  className={location.pathname === item.url ? "active" : ""}
                >
                  {item.text}
                </LinkStyle>
              </li>
            ))
          : menuItensUser.map((item) => (
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

