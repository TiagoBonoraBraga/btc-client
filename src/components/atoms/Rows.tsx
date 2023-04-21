import {AiOutlineCheck} from "react-icons/ai"
import { BoxButton } from "./AtomsStyles/Rows";
import {FiEdit} from "react-icons/fi"
import React from 'react'

export type RowsProps = {
    name: string;
    clients: string;
    users: string;
    situation: string;
   
    
   
}

const Rows = ({ name, clients, users, situation}: RowsProps) => {
   
   function handleClick() {

   }

  return (
  
        <tr>
            <td>{name}</td>
            <td>{clients}</td>
            <td>{users}</td>
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
