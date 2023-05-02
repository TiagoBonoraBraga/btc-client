import React, { FormEvent, useState } from "react";

import FormInput from "../atoms/FormInput";
import { StyleSubTitulo } from "./OrganismsStyle/FormCadStyle";
import SubTitulo from "../atoms/SubTitle";
import SubmitButton from "../atoms/SubmitButton";

interface createRequest {
  name: string;
  email: string;
  address: string;
  password: string;
}

const FormCadFranchisee = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const handleInputChange = (value: string) => {
    setNameValue(value);
    setEmailValue(value);
    setEmailValue(value);
    setAddressValue(value);
    setPasswordValue(value);
    setConfirmPasswordValue(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNameValue("");
    setEmailValue("");
    setEmailValue("");
    setAddressValue("");
    setPasswordValue("");
    setConfirmPasswordValue("");
    const FranchiseePayLoad: createRequest = {
      name: nameValue,
      email: emailValue,
      address: addressValue,
      password: passwordValue,
    };
    console.log(FranchiseePayLoad);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyleSubTitulo>
        <SubTitulo titulo={"Cadastrar Franqueado"} />
      </StyleSubTitulo>
      <FormInput
        label={"Nome"}
        id={"name"}
        placeholder={"Nome"}
        value={nameValue}
        setValue={setNameValue}
        type={"text"}
        required={""}       
      />

      <FormInput
        label={"E-mail"}
        id={"email"}
        placeholder={"jhondor@mail.com"}
        value={emailValue}
        setValue={setEmailValue}
        type={"email"} required={""}     
      />

      <FormInput
        label={"Endereço"}
        id={"address"}
        placeholder={"Endereço"}
        value={addressValue}
        setValue={setAddressValue}
        type={"text"} required={""}      
      />

      <FormInput
        label={"Senha"}
        id={"password"}
        placeholder={"Senha"}
        value={passwordValue}
        setValue={setPasswordValue}
        type={"password"} required={""}        
      />

      <FormInput
        label={"Confirme Senha"}
        id={"passwordConfirm"}
        placeholder={"Senha"}
        value={confirmPasswordValue}
        setValue={setConfirmPasswordValue}
        type={"password"} required={""}       
      />

      <SubmitButton title={"Enviar"} />
    </form>
  );
};

export default FormCadFranchisee;