import React, { FormEvent, useState } from "react";
import { CreateProductRequest } from "../../utils/types/requests";
import FormInput from "../atoms/FormInput";
import { StyleSubTitulo } from "./OrganismsStyle/FormCadStyle";
import SubTitulo from "../atoms/SubTitle";
import SubmitButton from "../atoms/SubmitButton";
import { api } from "../../utils/api/api";

const FormCadProduct = () => {
  const [productName, setProductName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [commission, setCommission] = useState<number>();
  const [score, setScore] = useState<number>();
  const [price, setPrice] = useState<number>();

  const handleProductNameChange = (value: string) => {
    setProductName(value);
  };

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };

  const handleCommissionChange = (value: string) => {
    const parsedValue = parseFloat(value);
    setCommission(isNaN(parsedValue) ? undefined : parsedValue);
  };

  const handleScoreChange = (value: string) => {
    const parsedValue = parseFloat(value);
    setScore(isNaN(parsedValue) ? undefined : parsedValue);
  };

  const handlePriceChange = (value: string) => {
    const parsedValue = parseFloat(value.replace(",", "."));
    setPrice(isNaN(parsedValue) ? undefined : parsedValue);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (productName && description && commission !== undefined && score !== undefined && price !== undefined) {
      const ProductPayLoad: CreateProductRequest = {
        name: productName,
        description: description,
        commission: commission,
        score: score,
        price: price,
      };
      console.log(ProductPayLoad)
      await api.createProduct(ProductPayLoad);
      
      setProductName("");
      setDescription("");
      setCommission(undefined);
      setScore(undefined);
      setPrice(undefined);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyleSubTitulo>
        <SubTitulo titulo={"Cadastrar Produtos"} />
      </StyleSubTitulo>
      <FormInput
        label={"Produto"}
        id={"product"}
        placeholder={"Nome do Produto"}
        value={productName}
        setValue={handleProductNameChange}
        type={"text"}
      />

      <FormInput
        label={"Descrição"}
        id={"description"}
        placeholder={"Descrição do Produto"}
        value={description}
        setValue={handleDescriptionChange}
        type={"text"}
      />

      <FormInput
        label={"Comissão"}
        id={"commission"}
        placeholder={"0%"}
        value={commission?.toString() || ""}
        setValue={handleCommissionChange}
        type={"text"}
      />

      <FormInput
        label={"Pontuação"}
        id={"punctuation"}
        placeholder={"Pontos"}
        value={score?.toString() || ""}
        setValue={handleScoreChange}
        type={"text"}
      />

      <FormInput
        label={"Valor"}
        id={"price"}
        placeholder={"R$"}
        value={price?.toString().replace(".", ",") || ""}
        setValue={handlePriceChange}
        type={"text"}
      />

      <SubmitButton title={"Enviar"} />
    </form>
  );
};

export default FormCadProduct;
