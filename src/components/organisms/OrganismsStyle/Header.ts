import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

interface MenuProps {
  show: boolean;
  
}

export const HeaderStyled = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.lightTheme.bg};
  border-bottom: 1px solid #2d9bf0;
`;

