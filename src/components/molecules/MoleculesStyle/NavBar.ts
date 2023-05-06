import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

interface MenuProps {
  show: boolean;
  
}

export const HeaderStyled = styled.header`
  width: 100%;
  z-index: 9999;
  position: fixed;
  background-color: ${({ theme }) => theme.lightTheme.bg};
  border-bottom: 1px solid #2d9bf0;
`;

export const LogoStyled = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
  
`;

export const MenuContentStyled = styled.div`
  position: absolute;
  z-index: 4;
  width: 100%;
  overflow: hidden;
  display: none;
  height: 40px;
  /* padding: 10px; */

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    position: fixed;
    position: relative;
    display: flex;
    align-items: flex-end;
    background: #fff;
    box-sizing: border-box;
    flex-shrink: 0;
    flex-direction: column;
    z-index: 10;
  }
`;

export const MenuIconStyled = styled.img`
  cursor: pointer;
  padding-bottom: 20px;
`;

export const LinkStyle = styled(Link)<MenuProps>`
  color: #ccc;
  display: block;
  text-align: center;
  padding: 16px;
  outline: none;
  text-decoration: none;

  &.active {
    color: #2D9BF0;
    border-bottom: 2px solid #2D9BF0;
  }

  &:hover{
    color: #2D9BF0;
    border-bottom: 1px solid #2D9BF0;
  }
  
`;

export const MenuStyled = styled.ul<MenuProps>`
  list-style: none;
  margin: 0;
  padding: 0 15%;
  overflow: hidden;
  font-size: 1rem;
  display: flex;
  justify-content: flex-start;

  li {
    display: block;
    color: #727577;
    text-align: center;
    padding: 16px;
    outline: none;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    display: ${({ show }) => (show ? "block" : "none")};
    position: fixed;
    z-index: 4;
    background-color: ${({ theme }) => theme.lightTheme.bg};
    top: 40px;
    overflow: hidden;
    height: 100%;
    width: 100%;
    padding: 0;
    font-size: 1.2rem;

    li {
      width: 100%;
    }

    li:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.darkTheme.bg};
      a {
        color: #fff;
      }
    }
  }
`;
