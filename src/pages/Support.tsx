import FormInput, { InputProps } from "../components/atoms/FormInput";
import SubmitButton from "../components/atoms/SubmitButton";
import React, { ChangeEvent, FormEvent, useState } from "react";
import TextInput from "../components/atoms/TextInput";
import Header from "../components/organisms/Header";
import SubTitle from "../components/atoms/SubTitle";
import {
  SectionSupport,
  StyleButton,
  SupportContainer,
} from "./StylePages/Support";
import Footer from "../components/atoms/Footer";

interface SupportRequest {
  name: string;
  subject: string;
  message: string;
}

const Support = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const supportPayload: SupportRequest = {
      name: name,
      subject: subject,
      message: message,
    };
    console.log(supportPayload);
    setName("");
    setSubject("");
    setMessage("");
  }

  function handleNameChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    setMessage(event.target.value);
  }

  return (
    <>
      <Header />
      <SectionSupport>
        <SubTitle titulo={"Solicitação de Suporte"} />
        <SupportContainer as="form" onSubmit={handleSubmit}>
          <FormInput
            label={"Nome"}
            placeholder={""}
            value={name}
            setValue={setName}
            type={"text"}
            required={""}
          />
          <FormInput
            label={"Assunto"}
            placeholder={""}
            value={subject}
            setValue={setSubject}
            type={"text"}
            required={""}
          />
          <TextInput
            onChange={handleNameChange}
            placeholder="Escreva aqui sua mensagem"
            value={message}
          />
          <StyleButton>
            <SubmitButton title={"Enviar"} />
          </StyleButton>
        </SupportContainer>
      </SectionSupport>
    </>
  );
};

export default Support;
