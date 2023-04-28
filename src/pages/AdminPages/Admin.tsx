import { LeftDiv, RightDiv, Section, StyleSubTitulo } from "../StylePages/Home";
import { useEffect, useState } from "react";
import Cards from "../../components/organisms/Cards";
import Form from "../../components/molecules/Form";
import FormCadClient from "../../components/organisms/FormCadClient";
import FormCadFranchisee from "../../components/organisms/FormCadFranchisee";
import FormCadProduct from "../../components/organisms/FormCadProduct";
import Header from "../../components/organisms/Header";
import Modal from "../../components/molecules/Modal";
import SubTitulo from "../../components/atoms/SubTitle";
import logoHyperloca from "../../assets/logoHyperlocal.png";
import LogoAdmin from "../../components/atoms/LogoPagAdmin";

type initialStateProps = {
  FormCadFranchisee: boolean;
  FormCadClient: boolean;
  FormCadProduct: boolean;
};

const Admin = () => {
  const initialState = {
    FormCadFranchisee: false,
    FormCadClient: false,
    FormCadProduct: false,
  };

  const [info, setInfo] = useState<initialStateProps>(initialState);
  const [logo, setLogo] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(true);

  useEffect(() => {
    setLogo(true);
    setInfo({ ...initialState, FormCadFranchisee: false });
  }, []);
  /* const handleClose = () => {
    setShowModal(false);
  }; */
  const handleClickFranc = () => {
    setLogo(false);
    setInfo({ ...initialState, FormCadFranchisee: true });
  };

  const handleClickClient = () => {
    setLogo(false);
    setInfo({ ...initialState, FormCadClient: true });
  };
  const handleClickProduct = () => {
    setLogo(false);
    setInfo({ ...initialState, FormCadProduct: true });
  };

  return (
    <>
      {/* <Modal show={true} handleClose={function (): void {
        throw new Error("Function not implemented.");
      } }></Modal> */}
      <Header />
      <Section>
        <LeftDiv>
          <StyleSubTitulo>
            <SubTitulo titulo={"Cadastros"} />
          </StyleSubTitulo>
          <Cards
            title={"Cadastrar Franqueados"}
            image={""}
            description={""}
            onClick={handleClickFranc}
          />
          <Cards
            title={"Cadastrar Clientes"}
            image={""}
            description={""}
            onClick={handleClickClient}
          />
          <Cards
            title={"Cadastrar Produtos"}
            image={""}
            description={""}
            onClick={handleClickProduct}
          />
        </LeftDiv>
        <RightDiv>
          {info.FormCadFranchisee && <FormCadFranchisee />}
          {info.FormCadClient && <FormCadClient />}
          {info.FormCadProduct && <FormCadProduct />}
          {logo && showModal && <LogoAdmin />}
        </RightDiv>
      </Section>
    </>
  );
};

export default Admin;
