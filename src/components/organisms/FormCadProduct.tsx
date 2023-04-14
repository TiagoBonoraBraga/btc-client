import React, { FormEvent, useState } from "react";

import FormInput from "../atoms/FormInput";
import { StyleSubTitulo } from "./OrganismsStyle/FormCadStyle";
import SubTitulo from "../atoms/SubTitle";
import SubmitButton from "../atoms/SubmitButton";

interface createRequest {
  product: string;
  commission: string;
  ponctuation: string;
}

const FormCadProduct = () => {
  const [productValue, setProductValue] = useState("");
  const [commissionValue, setCommissionValue] = useState("");
  const [ponctuationValue, setPonctuationValue] = useState("");

  const handleInputChange = (value: string) => {
    setProductValue(value);
    setCommissionValue(value);
    setPonctuationValue(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProductValue("");
    setCommissionValue("");
    setPonctuationValue("");
    const ProductPayLoad: createRequest = {
      product: productValue,
      commission: commissionValue,
      ponctuation: ponctuationValue,
    };
    console.log(ProductPayLoad);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyleSubTitulo>
        <SubTitulo titulo={"Cadastrar Produtos"} />
      </StyleSubTitulo>
      <FormInput
        label={"Produto"}
        id={"product"}
        placeholder={"Produto"}
        value={productValue}
        setValue={setProductValue}
        type={"text"}
        required
      />

      <FormInput
        label={"Comissão"}
        id={"commission"}
        placeholder={"0%"}
        value={commissionValue}
        setValue={setCommissionValue}
        type={"text"}
        required
      />

      <FormInput
        label={"Pontuação"}
        id={"punctuation"}
        placeholder={"Pontos"}
        value={ponctuationValue}
        setValue={setPonctuationValue}
        type={"text"}
        required
      />

      <SubmitButton title={"Enviar"} />
    </form>
  );
};

export default FormCadProduct;