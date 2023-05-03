import { ButtonsWrapper, ModalCloseButton, ModalContainer, ModalContentWrapper, ModalHeader, ModalOverlay, ModalTitleWrapper } from '../molecules/MoleculesStyle/Modal';
import React, { useState } from 'react'

import CancelButton from '../atoms/CancelButton';
import FormInput from '../atoms/FormInput';
import { RowsClientProps } from '../atoms/RowsClient';
import SubTitulo from "../atoms/SubTitle";
import SubmitButton from '../atoms/SubmitButton';
import { api } from '../../utils/api/api';
import { updateClientRequest } from '../../utils/types/requests';

interface ModalProps {
    id: string;
    show: boolean;
    clientSelect?: RowsClientProps;
    handleClose: () => void;
    onSave: (product: RowsClientProps) => void;
}


const ModalClient = ({ show, clientSelect, handleClose, onSave }: ModalProps) => {
    const [formValues, setFormValues] = useState<RowsClientProps>({
    idFranchise: clientSelect?.idFranchise || "",
    name: clientSelect?.name || "",
    email: clientSelect?.email || "",
    phone: clientSelect?.phone || "0",
    cpf: clientSelect?.cpf || "0",
    situacao: clientSelect?.situacao || "0",
   
  });

   const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const updatedClientPayload: updateClientRequest = {
      idFranchise: formValues.idFranchise,
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
      cpf: formValues.cpf,
      
    };
    console.log(updatedClientPayload);
    await api.updateClient(updatedClientPayload);
    handleClose();
  };

    const handleCancel = () => {
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
                            id={"product-name"}
                            placeholder={""}
                            value={formValues.name}
                            onChange={(event) => setFormValues({ ...formValues, name: event.target.value })}
                            type={"text"}
                            setValue={(value: string) => setFormValues({ ...formValues, name: value })} required={""} />
                        <FormInput
                            label={"E-mail"}
                            id={"email"}
                            placeholder={""}
                            value={formValues.email}
                            onChange={(event) => setFormValues({
                                ...formValues,
                                email: event.target.value,
                            })}
                            type={"text"}
                            setValue={(value: string) => setFormValues({ ...formValues, name: value })} required={""} />

                        <FormInput
                            label={"Phone"}
                            id={"phone"}
                            placeholder={""}
                            value={formValues.phone}
                            onChange={(event) => setFormValues({
                                ...formValues,
                                phone: event.target.value,
                            })}
                            type={"text"}
                            setValue={(value: string) => setFormValues({ ...formValues, name: value })} required={""} />

                        <FormInput
                            label={"Cpf"}
                            id={"cpf"}
                            placeholder={""}
                            value={formValues.cpf}
                            onChange={(event) => setFormValues({
                                ...formValues,
                                cpf: event.target.value,
                            })}
                            type={"text"}
                            setValue={(value: string) => setFormValues({ ...formValues, name: value })} required={""} />
                        




                    </form>
                </ModalContentWrapper>
                <ButtonsWrapper>
                    <CancelButton onClick={handleCancel} title={"Cancelar"} />
                    <SubmitButton onClick={handleSubmit} title={"Enviar"} />
                </ButtonsWrapper>
            </ModalContainer>
        </ModalOverlay>
    )
}

export default ModalClient
function handleClose() {
    throw new Error('Function not implemented.');
}

