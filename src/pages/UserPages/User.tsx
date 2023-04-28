import React from "react";
import Header from "../../components/organisms/Header";

import SubTitle from "../../components/atoms/SubTitle";
import {
  Content,
  FooterDiv,
  LeftDiv,
  LeftDivFooter,
  RightDiv,
  RightDivFooter,
  Section,
  StyleSubTitulo,
} from "../StylePages/HomeUser";
import Footer from "../../components/atoms/Footer";

/* interface UserProps {
  name: string;
  age: number;
  email?: string; // propriedade opcional
} */

const User = () => {
  return (
    <>
      <Header />
      <Content>
        <StyleSubTitulo>
          <SubTitle titulo={"Resumo"} />
        </StyleSubTitulo>
        <Section>
          <LeftDiv>
            <SubTitle titulo={"Receitas"} />
            <h2>Dashboard</h2>
            <p>
              Dashboard com a movimentação de Receitas.
            </p>
          </LeftDiv>
          <RightDiv>
            <SubTitle titulo={"Comissão"} />
            <h2>Dashboard</h2>
            <p>
              Dashboard com a movimentação de Comissões.
            </p>
          </RightDiv>
        </Section>
        <FooterDiv>
          <LeftDivFooter>
            <h2>Vendas</h2>
            <p>Produtos vendidos.</p>
          </LeftDivFooter>
          <RightDivFooter>
            <h2>Clientes</h2>
            <p>Clientes de sua carteira.</p>
          </RightDivFooter>
        </FooterDiv>
      </Content>
      <Footer />
    </>
  );
};

export default User;
