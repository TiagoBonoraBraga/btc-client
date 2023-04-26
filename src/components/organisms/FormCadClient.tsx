import React, { FormEvent, useState } from "react";

import { CreateClientRequest } from "../../utils/types/requests";
import FormInput from "../atoms/FormInput";
import { StyleSubTitulo } from "./OrganismsStyle/FormCadStyle";
import SubTitulo from "../atoms/SubTitle";
import SubmitButton from "../atoms/SubmitButton";
import { api } from "../../utils/api/api";

interface createRequest {
  name: string;
  email: string;
  address: string;
}

const FormCadClient = () => {
  const [nameValue, setNameValue] = useState("");
  const [cepValue, setCepValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [cpfValue, setCpfValue] = useState("");
  const [foneValue, setFoneValue] = useState("");
  const [error, setError] = useState<boolean>(false);


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNameValue("");
    setCepValue("");
    setAddressValue("");
    setCpfValue("");
    setFoneValue("");

    const clientPayLoad: CreateClientRequest = {
      name: nameValue,
      cep: cepValue,
      adress: addressValue,
      cpf: cpfValue,
      fone: foneValue,
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
        label={"Endereço:"}
        id={"address"}
        placeholder={"Endereço"}
        value={addressValue}
        setValue={setAddressValue}
        type={"text"}
      />

      <FormInput
        label={"Cep:"}
        id={"cep"}
        placeholder={"Digite o cep"}
        value={cepValue}
        setValue={setCepValue}
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
        value={foneValue}
        setValue={setFoneValue}
        type={"text"}
      />


      <SubmitButton title={"Enviar"} />
    </form>
  );
};

export default FormCadClient;