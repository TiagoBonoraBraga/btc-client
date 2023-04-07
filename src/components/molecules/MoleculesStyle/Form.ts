import styled from 'styled-components'

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%; 
    height: 300px;
    max-width: 300px;
    border: 1px solid ${(props) => props.theme.lightTheme.fg};
    border-radius: 20px;
`;

export const BoxForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 70%; 
    
`;