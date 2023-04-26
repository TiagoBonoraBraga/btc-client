import React, { useState, useEffect } from "react";
import SubTitulo from "../atoms/SubTitle";
import SubmitButton, { SubmitButtonProps } from "../atoms/SubmitButton";
import CancelButton from "../atoms/CancelButton";
import FormInput from "../atoms/FormInput";
import { RowsProductsProps } from "../atoms/RowsProducts";
import {
  ButtonsWrapper,
  ModalCloseButton,
  ModalContainer,
  ModalContentWrapper,
  ModalHeader,
  ModalOverlay,
  ModalTitleWrapper,
} from "../molecules/MoleculesStyle/Modal";
import { api } from "../../utils/api/api";


interface ModalProps {
  id: string,
  show: boolean;
  productSelect?: RowsProductsProps;
  handleClose: () => void;
  onSave: (product: RowsProductsProps) => void;
}


interface updatedRequest {
  id: string,
  name: string;
  description: string;
  commission: number;
  score: number;
  price: number;
}

const ModalProducts: React.FC<ModalProps> = ({
  show,
  handleClose,
  productSelect,
  onSave,
}) => {
  const [formValues, setFormValues] = useState<RowsProductsProps>({
    id: productSelect?.id || "",
    name: productSelect?.name || "",
    description: productSelect?.description || "",
    commission: productSelect?.commission || 0,
    score: productSelect?.score || 0,
    price: productSelect?.price || 0,
  });
  console.log(productSelect)

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const updatedProductPayload: updatedRequest = {
      id: formValues.id,
      name: formValues.name,
      description: formValues.description,
      commission: +formValues.commission,
      score: +formValues.score,
      price: +formValues.price,
    };
    console.log(updatedProductPayload);
    await api.updateProduct(updatedProductPayload);
    handleClose();
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleSave = () => {
    onSave({ ...formValues });
    handleClose();
  };

  return (
    <ModalOverlay isOpen={show} onClick={handleClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitleWrapper>
            <SubTitulo titulo={"Editar Produto"}/>
          </ModalTitleWrapper>
          <ModalCloseButton onClick={handleClose}>×</ModalCloseButton>
        </ModalHeader>
        <ModalContentWrapper>
          <form>
            <FormInput
              label={"Nome"}
              id={"product-name"}
              placeholder={""}
              value={formValues.name}
              onChange={(event) =>
                setFormValues({ ...formValues, name: event.target.value })
              }
              type={"text"}
              setValue={setFormValues}
            />
            <FormInput
              label={"Descrição"}
              id={"product-description"}
              placeholder={""}
              value={formValues.description}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  description: event.target.value,
                })
              }
              type={"text"}
              setValue={setFormValues}
            />

            <FormInput
              label={"Comissão"}
              id={"product-commission"}
              placeholder={""}
              value={formValues.commission?.toString() || ""}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  commission: parseInt(event.target.value),
                })
              }
              type={"text"}
              setValue={setFormValues}
            />

            <FormInput
              label={"Score"}
              id={"product-Score"}
              placeholder={""}
              value={formValues.score.toString()} // converter para string para evitar warning
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  score: parseFloat(event.target.value),
                })
              }
              type={"text"}
              setValue={setFormValues}
            />

            <FormInput
              label={"Valor"}
              id={"product-price"}
              placeholder={""}
              value={formValues.price.toString()}
              onChange={(event) =>
                setFormValues({ ...formValues, price: parseFloat(event.target.value) })
              }
              type={"text"}
              setValue={setFormValues}
            />
          </form>
        </ModalContentWrapper>
        <ButtonsWrapper>
          <CancelButton onClick={handleCancel} title={"Cancelar"} />
          <SubmitButton onClick={handleSubmit} title={"Enviar"} />
        </ButtonsWrapper>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalProducts;
