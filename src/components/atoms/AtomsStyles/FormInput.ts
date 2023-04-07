import styled from 'styled-components';

export const LabelForm = styled.label`
    color: #2D9BF0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 120px;
    font-size: 15;
`;

export const InputForm = styled.input`
    border: 1px solid #2D9BF0;;
    border-radius: 5px;
    margin: 5px 0 10px 0;
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 20px;
    

   
  
    :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
}

    ::-webkit-input-placeholder { /* Edge */
        color: #ccc;
        font-size:smaller;
}

    :-ms-input-placeholder { /* Internet Explorer */
        color: #ccc;
}

    ::placeholder {
        color: #ccc;
}
`;