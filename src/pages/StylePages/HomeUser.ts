import React from "react";
import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
  /* Adicione aqui outras propriedades de estilo que desejar */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
  padding: 1rem;
  margin-top: 8rem;

  @media screen and (max-width: 768px) {
   /*  display: grid; */
   margin-top: 50px;
    justify-content: center;
    flex-direction: column;
    grid-column: auto;
    align-items: center;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    display: grid;
    justify-content: center;
    flex-direction: column;
    grid-column: auto;
    align-items: center;
  }
`;

export const StyleSubTitulo = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  text-align: center;
`;

export const LeftDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 100%;
  margin-top: 3rem;
  margin-right: 3rem;
  border: 1px solid #2d9bf0;
  border-radius: 50px;
  background-color: aliceblue;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    padding: 5rem;
    width: calc(50% - 20px);
    margin: 0.5rem;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 100%;
  margin-top: 3rem;
  border: 1px solid #2d9bf0;
  border-radius: 50px;
  background-color: aliceblue;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    padding: 5rem;
    width: calc(50% - 20px);
    margin: 0.5rem;
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  margin-top: 10rem;
  border: 1px solid #2d9bf0;
  border-radius: 50px;
  width: 100%;
  background-color: aliceblue;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    padding: 5rem;
    width: calc(50% - 20px);
    margin: 0.5rem;
  }
`;

export const LeftDivFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-right: 3rem;

  h2 {
    font-size: 3rem;
  }

  @media screen and (max-width: 768px) {
    padding: 5rem;
    width: calc(50% - 20px);
    margin: 0.5rem;
  }
`;

export const RightDivFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 50%;

  h2 {
    font-size: 3rem;
  }
  @media screen and (max-width: 768px) {
    padding: 5rem;
    width: calc(50% - 20px);
    margin: 0.5rem;
  }
`;
