import React, { useState, useEffect } from "react";
import SubTitulo from "../atoms/SubTitle";
import SubmitButton, { SubmitButtonProps } from "../atoms/SubmitButton";
import CancelButton from "../atoms/CancelButton";
import FormInput from "../atoms/FormInput";
import { RowsClientProps } from "../atoms/RowsClient";
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
import FormInputNumber from "../atoms/FomInputNumber";
import { UpdateClientRequest } from "../../utils/types/requests";

interface ModalProps {
  id: string;
  show: boolean;
  clientSelect?: RowsClientProps;
  handleClose: () => void;
  onSave: (client: RowsClientProps) => void;
}

interface updatedRequest {
  id: string;
  name: string;
  phone: string;
  cpf: string;
  cnpj: string;
  situação: boolean | null;
}

const ModalProducts: React.FC<ModalProps> = ({
  show,
  handleClose,
  clientSelect,
  onSave,
}) => {
  const [formValues, setFormValues] = useState<RowsClientProps>({
    name: clientSelect?.name || "",
    email: clientSelect?.email || "",
    phone: clientSelect?.phone || "",
    cpf: clientSelect?.cpf || "",
    cnpj: clientSelect?.cnpj || "",
    situacao: clientSelect?.situacao || null,
  });
  console.log(clientSelect);

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const updatedClientPayload: UpdateClientRequest = {
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
      cpf: formValues.cpf,
      cnpj: formValues.cnpj,
    };
    console.log(updatedClientPayload);
    await api.UpdateClientRequest(updatedClientPayload);
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
            <SubTitulo titulo={"Editar Produto"} />
          </ModalTitleWrapper>
          <ModalCloseButton onClick={handleClose}>×</ModalCloseButton>
        </ModalHeader>
        <ModalContentWrapper>
          <form>
            <FormInput
              label={"Nome"}
              id={"client-name"}
              placeholder={""}
              value={formValues.name}
              onChange={(event) =>
                setFormValues({ ...formValues, name: event.target.value })
              }
              type={"text"}
              setValue={(value: string) =>
                setFormValues({ ...formValues, name: value })
              }
              required={""}
            />

            <FormInput
              label={"email"}
              id={"client-email"}
              placeholder={""}
              value={formValues.email}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  email: event.target.value,
                })
              }
              type={"text"}
              setValue={(value: string) =>
                setFormValues({ ...formValues, email: value })
              }
              required={""}
            />

            <FormInput
              label={"phone"}
              id={"client-phone"}
              placeholder={""}
              value={formValues.phone}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  phone: event.target.value,
                })
              }
              type={"text"}
              setValue={(value: string) =>
                setFormValues({ ...formValues, name: value })
              }
              required={""}
            />

            <FormInput
              label={"cpf"}
              id={"client-cpf"}
              placeholder={""}
              value={formValues.cpf}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  cpf: event.target.value,
                })
              }
              type={"text"}
              setValue={(value: string) =>
                setFormValues({ ...formValues, cpf: value })
              }
              required={""}
            />

            <FormInput
              label={"cnpj"}
              id={"client-cnpj"}
              placeholder={""}
              value={formValues.cnpj}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  cnpj: event.target.value,
                })
              }
              type={"text"}
              setValue={(value: string) =>
                setFormValues({ ...formValues, cnpj: value })
              }
              required={""}
            />
            <FormInput
              label={"situação"}
              id={"client-situação"}
              placeholder={""}
              value={formValues.situação}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  situação: event.target.value,
                })
              }
              type={"text"}
              setValue={(value: string) =>
                setFormValues({ ...formValues, situação: value })
              }
              required={""}
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
