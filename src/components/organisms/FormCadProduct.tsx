import React, { FormEvent, useState } from "react";

import { CreateProductRequest } from "../../utils/types/requests";
import FormInput from "../atoms/FormInput";
import { StyleSubTitulo } from "./OrganismsStyle/FormCadStyle";
import SubTitulo from "../atoms/SubTitle";
import SubmitButton from "../atoms/SubmitButton";
import { api } from "../../utils/api/api";

const FormCadProduct = () => {
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [scoreValue, setScoreValue] = useState("");
  // const [priceValue, setPriceValue] = useState("");
  const [error, setError] = useState<boolean>(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const productPayLoad: CreateProductRequest = {
      name: nameValue,
      description: descriptionValue,
      score: scoreValue,
      // price: priceValue,
    };
    console.log(productPayLoad);
    const productData = await api.createProduct(productPayLoad);
    console.log(productData)
    if (!productData) {
      setError(true);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyleSubTitulo>
        <SubTitulo titulo={"Cadastrar Produtos"} />
      </StyleSubTitulo>
      <FormInput
        label={"Nome do Produto"}
        id={"name"}
        placeholder={"Digite o nome do produto"}
        value={nameValue}
        setValue={setNameValue}
        type={"text"}
      />

      <FormInput
        label={"Descrição do Produto"}
        id={"description"}
        placeholder={"Digite a descrição do produto"}
        value={descriptionValue}
        setValue={setDescriptionValue}
        type={"text"}
      />

      <FormInput
        label={"Score"}
        id={"score"}
        placeholder={"Digite o score do produto"}
        value={scoreValue}
        setValue={setScoreValue}
        type={"text"}
      />

      {/* <FormInput
        label={"Preço"}
        id={"price"}
        placeholder={"Digite o preço do produto"}
        value={priceValue}
        setValue={setPriceValue}
        type={"text"}
      /> */}

      <SubmitButton title={"Enviar"} />
    </form>
  );
};

export default FormCadProduct;