import React, { FormEvent, useEffect, useState } from "react";
import { CreateProductRequest } from "../../utils/types/requests";
import FormInput from "../atoms/FormInput";
import { StyleSubTitulo } from "./OrganismsStyle/FormCadStyle";
import SubTitulo from "../atoms/SubTitle";
import SubmitButton from "../atoms/SubmitButton";
import { api } from "../../utils/api/api";
import FormInputNumber from "../atoms/FomInputNumber";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const FormCadProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [commission, setCommission] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");

  const handleProductNameChange = (value: React.SetStateAction<string>) => {
    setName(value);
  };
  const handleDescriptionChange = (value: React.SetStateAction<string>) => {
    setDescription(value);
  };

  const handleCommissionChange = (
    defaultValue: React.SetStateAction<number>
  ) => {
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
      console.log(ProductPayLoad);
      try {
        const response = await api.createProduct(ProductPayLoad, setShowError);
        console.log(response);
        setShowSuccess(true);
        setName("");
        setDescription("");
        setCommission(0);
        setScore(0);
        setPrice(0.0);
        window.location.reload();
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

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
          <Alert severity="success">Produto cadastrado com sucesso!</Alert>
        </Stack>
      )}

      {showError && (
        <Stack>
          <Alert severity="error">{error}</Alert>
        </Stack>
      )}

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
          required={"Campo requirido"}
        />

        <FormInput
          label={"Descrição"}
          id={"description"}
          placeholder={"Descrição do Produto"}
          value={description}
          setValue={handleDescriptionChange}
          type={"text"}
          required={"Campo requirido"}
        />

        <FormInputNumber
          label={"Comissão"}
          id={"commission"}
          placeholder={"0%"}
          defaultValue={commission}
          setDefault={handleCommissionChange}
          type={"number"}
          required={"Campo requirido"}
        />

        <FormInputNumber
          label={"Pontuação"}
          id={"punctuation"}
          placeholder={"Pontos"}
          defaultValue={score}
          setDefault={handleScoreChange}
          type={"number"}
          required={"Campo requirido"}
        />

        <FormInputNumber
          label={"Valor"}
          id={"price"}
          placeholder={"R$"}
          defaultValue={price}
          setDefault={handlePriceChange}
          type={"number"}
          required={"Campo requirido"}
        />

        <SubmitButton title={"Enviar"} />
      </form>
    </>
  );
};

export default FormCadProduct;
