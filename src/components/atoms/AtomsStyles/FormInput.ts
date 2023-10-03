import styled from 'styled-components';

export const LabelForm = styled.label`
    color: #2D9BF0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 120px;
    font-size: 15px;
`;



export const InputForm = styled.input`
  border: 1px solid #2d9bf0;
  border-radius: 5px;
  margin: 5px 0 10px 0;
  width: 80%;
  color: black;
  height: 3em;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3px;
  transition: box-shadow 0.2s ease-in-out; /* Adicionando uma transição suave para a sombra da caixa */
  
  
  ::placeholder {
    color: #ccc;
    font-size: smaller;
  }
  
  :focus {
    outline: none; /* Removendo o contorno padrão do elemento ao ser clicado */
    border-color: #2d9bf0;
    box-shadow: 0 0 3px 2px rgba(45, 155, 240, 0.3); /* Adicionando uma sombra quando o elemento está em foco */
  }
`;
