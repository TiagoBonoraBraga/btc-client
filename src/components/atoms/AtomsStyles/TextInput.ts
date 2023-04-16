import styled from "styled-components";

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

