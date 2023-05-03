import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        margin: 0;
        width: 100%;
        height: 100vh;
        background-color: ${(props) => props.theme.lightTheme.bg};
        color: ${(props) => props.theme.lightTheme.fg};
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
      } 

`;

const colors = {
  lightPrimary: "#fff",
  darkPrimary: "#2D9BF0",
};

export const theme = {
  lightTheme: {
    bg: colors.lightPrimary,
    fg: colors.darkPrimary,
  },
  darkTheme: {
    bg: colors.darkPrimary,
    fg: colors.lightPrimary,
  },
};

export interface Theme {
  bg: string;
  fg: string;
}
