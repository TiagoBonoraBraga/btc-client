import { AiOutlineCheck } from 'react-icons/ai';
import { BoxButton } from './AtomsStyles/Rows';
import { CreateClientRequest } from '../../utils/types/requests';
import { FiEdit } from 'react-icons/fi';
import React from 'react'

export type RowsClientProps = {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  situacao: string;
  
}

const RowsClient = ({ name, email, phone, cpf, situacao}: RowsClientProps) => {
  function handleClick() {

  }
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
       <td>{cpf}</td>
      <td>
        <BoxButton onClick={handleClick}>
          <FiEdit color="#2D9BF0" />
        </BoxButton>
      </td>
      <td><AiOutlineCheck color={"green"}/>{situacao}</td>
    </tr>
  )
}

export default RowsClient
