import styled from "styled-components";

export const NavBarBox = styled.nav`
    margin: 0;
   gap: 1rem;
    overflow: hidden;   
    display: flex;
    justify-content: flex-start;  

    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 100%;

        li{
            list-style: none;
            color: #A8A8A8;
            display: flex;
            justify-content: space-evenly;
            cursor: pointer;
            font-size:18px;
           

        }
    }
`;

