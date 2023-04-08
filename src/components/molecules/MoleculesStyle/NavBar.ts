import styled from "styled-components";

export const NavBarBox = styled.ul`
list-style: none;
margin: 0;
padding: 0 10% ;
overflow: hidden;
font-size: 1rem;
display: flex;
justify-content: flex-start;


li {
    display: block;
    color: #A8A8A8;
    text-align: center;
    padding: 16px;
    outline: none;
    text-decoration: none;
    cursor: pointer;
}

@media (max-width: 768px) {
    position: fixed;
    z-index: 4;
    background-color: ${({theme}) => theme.darkTheme.bg};
    top: 40px;
    overflow: hidden;
    height: 100%;
    width: 100%;
    padding: 0;

    li{
        width: 100%;
        color: ${({theme}) => theme.lightTheme.fg};
        cursor: pointer;
    }
}
    
`;

