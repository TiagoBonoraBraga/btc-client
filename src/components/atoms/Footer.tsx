import React from "react";
import { FooterWrapper } from "./AtomsStyles/FooterStyle";
import Logo from "../../assets/logohyperdashmenor.png"
import { LogoStyled } from "../molecules/MoleculesStyle/NavBar";


const Footer = () => {
    return (
      <FooterWrapper>

        <a href="/user">
          <img src={Logo} alt="logo" width="150px" />
        </a>
        <p>&copy; 2023 - Todos os direitos reservados</p>
    
      </FooterWrapper>
    );
  };
  
  export default Footer;