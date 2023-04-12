import React, { useState } from "react";
import SubTitulo from "../atoms/SubTitulo";
import SubmitButton from "../atoms/SubmitButton";
import CancelButton from "../atoms/CancelButton";
import {
  ButtonsWrapper,
  ModalCloseButton,
  ModalContainer,
  ModalContentWrapper,
  ModalHeader,
  ModalOverlay,
  ModalTitleWrapper,
} from "./MoleculesStyle/Modal";

interface ModalProps {
  showModal: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, handleClose }) => {
  const [isOpen, setIsOpen] = useState(showModal);

  const closeModal = () => {
    setIsOpen(false);
    handleClose();
  };

  return (
    <ModalOverlay isOpen={isOpen} onClick={closeModal}>
      <ModalContainer>
        <ModalHeader>

          <ModalTitleWrapper>
            <SubTitulo titulo={"Modal Exemple"} />
          </ModalTitleWrapper>
          
          <ModalCloseButton onClick={closeModal}>×</ModalCloseButton>
        </ModalHeader>
        
        <ModalContentWrapper>
          <p>Conteúdo de informação ao usuário</p>
        </ModalContentWrapper>

        <ButtonsWrapper>
          <CancelButton onClick={closeModal} title={"Cancelar"} />
          <SubmitButton title={"Enviar"} />
        </ButtonsWrapper>
      
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
