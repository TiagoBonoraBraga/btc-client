import { AiOutlineCheck } from 'react-icons/ai';
import { BoxButton } from './AtomsStyles/Rows';
import { FiEdit } from 'react-icons/fi';
import React from 'react'

export type RowsClientProps = {
  nome: string;
  produto: string;
  franquia: string;
  situacao: string;
}

const RowsClient = ({ nome, produto, franquia, situacao }: RowsClientProps) => {
  function handleClick() {

  }
  return (
    <tr>
      <td>{nome}</td>
      <td>{produto}</td>
      <td>{franquia}</td>
      <td>
        <BoxButton onClick={handleClick}>
          <FiEdit color="#2D9BF0" />
        </BoxButton>
      </td>
      <td><AiOutlineCheck color={"green"}/></td>
    </tr>
  )
}

export default RowsClient
