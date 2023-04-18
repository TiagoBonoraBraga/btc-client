import styled from "styled-components";

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 500px;
  max-height: 80%;
  overflow: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const ModalCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  margin: 0;
  transition: 0.2s ease-in-out;

  &:hover{
    color: #EB1906;
  }
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  
`;


