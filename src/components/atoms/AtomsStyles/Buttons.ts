import styled from 'styled-components'

export const SubButtom = styled.button`
    width: 170px;
    border: 1px solid #2D9BF0;
    border-radius: 5px;
    background-color: #2D9BF0;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    padding: 2.5px;
    cursor: pointer;
   
    transition: 0.2s ease-in-out;
    opacity: 0.7;
   
    &:hover{
        opacity: 1;
        box-shadow: 0 0 3px 2px rgba(45, 155, 240, 0.6);
        /* transform: translateY(-2px); */
    }
`;

export const CancButtom = styled.button`
    width: 170px;
    border: 2px solid #EB1906;
    border-radius: 5px;
    background-color: #EB1906;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    padding: 2.5px;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.2s ease-in-out;   

    &:hover{
        opacity: 1;
        box-shadow: 0 0 3px 2px rgba(235, 25, 6, 0.6);
       /*  transform: translateY(+2px); */
    }
`;