import {AiOutlineCheck} from "react-icons/ai"
import { BoxButton } from "./AtomsStyles/Rows";
import {FiEdit} from "react-icons/fi"
import React from 'react'

export type RowsProps = {
    nome: string;
    clientes: string;
    usuarios: string;
    situacao: string;
   
    
   
}

const Rows = ({ nome, clientes, usuarios, situacao}: RowsProps) => {
   
   function handleClick() {

   }

  return (
  
        <tr>
            <td>{nome}</td>
            <td>{clientes}</td>
            <td>{usuarios}</td>
            <td>
              <BoxButton onClick={handleClick}>
                <FiEdit color="#2D9BF0" />
              </BoxButton>
            </td>
            <td><AiOutlineCheck color={"green"}/></td>
        </tr>
      
   
  )
}

export default Rows
