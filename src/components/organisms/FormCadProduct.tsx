import React, { FormEvent, useState } from "react";
import { CreateProductRequest } from "../../utils/types/requests";
import FormInput from "../atoms/FormInput";
import { StyleSubTitulo } from "./OrganismsStyle/FormCadStyle";
import SubTitulo from "../atoms/SubTitle";
import SubmitButton from "../atoms/SubmitButton";
import { api } from "../../utils/api/api";
import FormInputNumber from "../atoms/FomInputNumber";

const FormCadProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [commission, setCommission] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);


  const handleProductNameChange = (value: React.SetStateAction<string>) => {
    setName(value);
  };
  const handleDescriptionChange = (value: React.SetStateAction<string>) => {
    setDescription(value);
  };

  const handleCommissionChange = (defaultValue: React.SetStateAction<number>) => {
    setCommission(defaultValue);
  };

  const handleScoreChange = (defaultValue: React.SetStateAction<number>) => {
    setScore(defaultValue);
  };

  const handlePriceChange = (defaultValue: React.SetStateAction<number>) => {
    setPrice(defaultValue);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name && description && commission && score && price) {
      const ProductPayLoad: CreateProductRequest = {
        name,
        description,
        commission,
        score,
        price,
      };
      console.log(ProductPayLoad)
      await api.createProduct(ProductPayLoad);
      setName("");
      setDescription("");
      setCommission(0);
      setScore(0);
      setPrice(0.0);
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
        value={name}
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

      <FormInputNumber
        label={"Comissão"}
        id={"commission"}
        placeholder={"0%"}
        defaultValue={commission}
        setDefault={handleCommissionChange}
        type={"number"}
      />

      <FormInputNumber
        label={"Pontuação"}
        id={"punctuation"}
        placeholder={"Pontos"}
        defaultValue={score}
        setDefault={handleScoreChange}
        type={"number"}
      />

      <FormInputNumber
        label={"Valor"}
        id={"price"}
        placeholder={"R$"}
        defaultValue={price}
        setDefault={handlePriceChange}
        type={"number"}
      />

      <SubmitButton title={"Enviar"} />
    </form>
  );
};

export default FormCadProduct;

