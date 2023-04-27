import React, { FormEvent, useEffect, useState } from "react";
import { CreateClientRequest } from "../../utils/types/requests";
import FormInput from "../atoms/FormInput";
import { StyleSubTitulo } from "./OrganismsStyle/FormCadStyle";
import SubTitulo from "../atoms/SubTitle";
import SubmitButton from "../atoms/SubmitButton";
import { api } from "../../utils/api/api";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

// interface createRequest {
//   name: string;
//   email: string;
//   address: string;
// }

const FormCadClient = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [cpfValue, setCpfValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [idFranchiseValue, setIdFranchiseValue] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIdFranchiseValue("");
    setNameValue("");
    setEmailValue("");
    setPhoneValue("");
    setCpfValue("");

    const clientPayLoad: CreateClientRequest = {
      idFranchise: idFranchiseValue,
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      cpf: cpfValue,
    };
    
    if (clientPayLoad.cpf && clientPayLoad.phone ) {
      if (clientPayLoad.cpf.length !== 11 || clientPayLoad.phone.length !== 11) {
        setShowError(true);
        return;
      }
    }

    console.log(clientPayLoad);
    const clientData = await api.createClient(clientPayLoad, setShowError);

    if (!clientData) {
      setError(true);
      setShowError(true);
      return;
    }
    setShowSuccess(true);
  }

  useEffect(() => {
    if (showSuccess || showError) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setShowError(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, showError]);

  return (
    <>
      {showSuccess && (
        <Stack>
          <Alert severity="success">Usuário cadastrado com sucesso!</Alert>
        </Stack>
      )}

      {showError && (
        <Stack>
          <Alert severity="error">CPF ou Telefone inválidos!</Alert>
        </Stack>
      )}

      <form onSubmit={handleSubmit}>
        <StyleSubTitulo>
          <SubTitulo titulo={"Cadastrar Cliente"} />
        </StyleSubTitulo>
        <FormInput
          label={"IdFranchised:"}
          id={"id"}
          placeholder={"Digite seu id"}
          value={idFranchiseValue}
          setValue={setIdFranchiseValue}
          type={"text"}
          required={"Campo requirido"}
        />
        <FormInput
          label={"Nome:"}
          id={"name"}
          placeholder={"Nome"}
          value={nameValue}
          setValue={setNameValue}
          type={"text"}
          required={""}
        />

        <FormInput
          label={"Email:"}
          id={"email"}
          placeholder={"Digite seu email"}
          value={emailValue}
          setValue={setEmailValue}
          type={"text"}
          required={"Campo requirido"}
        />

        <FormInput
          label={"Fone:"}
          id={"fone"}
          placeholder={"Digite seu fone"}
          value={phoneValue}
          setValue={setPhoneValue}
          type={"text"}
          required={"Campo requirido"}
        />
        <FormInput
          label={"Cpf:"}
          id={"cpf"}
          placeholder={"Digite seu cpf"}
          value={cpfValue}
          setValue={setCpfValue}
          type={"text"}
          required={"Campo requirido"}
        />

        <SubmitButton title={"Enviar"} />
      </form>
    </>
  );
};

export default FormCadClient;
