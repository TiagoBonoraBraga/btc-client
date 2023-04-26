import React, { FormEvent, useState } from "react";

import { CreateClientRequest } from "../../utils/types/requests";
import FormInput from "../atoms/FormInput";
import { StyleSubTitulo } from "./OrganismsStyle/FormCadStyle";
import SubTitulo from "../atoms/SubTitle";
import SubmitButton from "../atoms/SubmitButton";
import { api } from "../../utils/api/api";

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
  const [error, setError] = useState<boolean>(false);


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNameValue("");
    setEmailValue("");    
    setCpfValue("");
    setPhoneValue("");

    const clientPayLoad: CreateClientRequest = {
      name: nameValue, 
      email: emailValue,     
      cpf: cpfValue,
      phone: phoneValue,
    };
    console.log(clientPayLoad);
    const clientData = await api.createClient(clientPayLoad);
    
     if (!clientData) {
      setError(true);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyleSubTitulo>
        <SubTitulo titulo={"Cadastrar Cliente"} />
      </StyleSubTitulo>
      <FormInput
        label={"Nome:"}
        id={"name"}
        placeholder={"Nome"}
        value={nameValue}
        setValue={setNameValue}
        type={"text"}
      />

      <FormInput
        label={"Email:"}
        id={"email"}
        placeholder={"Digite seu email"}
        value={emailValue}
        setValue={setEmailValue}
        type={"text"}
      />     

      <FormInput
        label={"Cpf:"}
        id={"cpf"}
        placeholder={"Digite seu cpf"}
        value={cpfValue}
        setValue={setCpfValue}
        type={"text"}
      />

      <FormInput
        label={"Fone:"}
        id={"fone"}
        placeholder={"Digite seu fone"}
        value={phoneValue}
        setValue={setPhoneValue}
        type={"text"}
      />


      <SubmitButton title={"Enviar"} />
    </form>
  );
};

export default FormCadClient;