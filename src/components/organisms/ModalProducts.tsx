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

interface ModalProps {
  show: boolean;
  productSelect?: RowsProductsProps;
  handleClose: () => void;
  onSave: (product: RowsProductsProps) => void;
}

interface updatedRequest {
  name: string;
  description: string;
  commission: string;
  score: string;
  price: string;
}

const ModalProducts: React.FC<ModalProps> = ({
  show,
  handleClose,
  productSelect,
  onSave,
}) => {
  const [formValues, setFormValues] = useState<RowsProductsProps>({
    name: productSelect?.name || "",
    description: productSelect?.description || "",
    commission: productSelect?.commission || "",
    score: productSelect?.score || "",
    price: productSelect?.score || "",
  });

  const obj = { ...formValues };
  const isEditing = Boolean(productSelect);

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const updatedProduct: updatedRequest = {
      name: formValues.name,
      description: formValues.description,
      commission: formValues.commission,
      score: formValues.score,
      price: formValues.price,
    };
    console.log(updatedProduct);
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
            <SubTitulo titulo={isEditing ? "Editar Produto" : "Novo Produto"} />
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
              value={formValues.commission}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  commission: event.target.value,
                })
              }
              type={"text"}
              setValue={setFormValues}
            />
            <FormInput
              label={"Score"}
              id={"product-Score"}
              placeholder={""}
              value={formValues.score}
              onChange={(event) =>
                setFormValues({ ...formValues, score: event.target.value })
              }
              type={"text"}
              setValue={setFormValues}
            />
            <FormInput
              label={"Valor"}
              id={"product-price"}
              placeholder={""}
              value={formValues.price}
              onChange={(event) =>
                setFormValues({ ...formValues, price: event.target.value })
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
