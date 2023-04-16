import React, { FormEvent, useState } from "react";

import FormInput from "../atoms/FormInput";
import { StyleSubTitulo } from "./OrganismsStyle/FormCadStyle";
import SubTitulo from "../atoms/SubTitle";
import SubmitButton from "../atoms/SubmitButton";

interface createRequest {
  name: string;
  email: string;
  address: string;
}

const FormCadClient = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [addressValue, setAddressValue] = useState("");


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNameValue("");
    setEmailValue("");
    setAddressValue("");
    const ClientPayLoad: createRequest = {
      name: nameValue,
      email: emailValue,
      address: addressValue,
    };
    console.log(ClientPayLoad);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyleSubTitulo>
        <SubTitulo titulo={"Cadastrar Cliente"} />
      </StyleSubTitulo>
      <FormInput
        label={"Nome"}
        id={"name"}
        placeholder={"Nome"}
        value={nameValue}
        setValue={setNameValue}
        type={"text"}
      />

      <FormInput
        label={"E-mail"}
        id={"email"}
        placeholder={"jhondor@mail.com"}
        value={emailValue}
        setValue={setEmailValue}
        type={"email"}
      />

      <FormInput
        label={"Endereço"}
        id={"address"}
        placeholder={"Endereço"}
        value={addressValue}
        setValue={setAddressValue}
        type={"text"}
      />

      <SubmitButton title={"Enviar"} />
    </form>
  );
};

export default FormCadClient;