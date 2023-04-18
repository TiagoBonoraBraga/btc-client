import { BoxButton } from './AtomsStyles/Rows';
import { FiEdit } from 'react-icons/fi';
import React from 'react'

export type RowsProductsProps = {
    nome: string;
    descricao: string;
    comissao: number; 
}
const RowsProducts = ({nome, descricao, comissao}: RowsProductsProps ) => {
  function handleClick() {

  }
  return (
    <tr>
        <td>{nome}</td>
        <td>{descricao}</td>
        <td>{comissao}</td>
        <td>
        <BoxButton onClick={handleClick}>
          <FiEdit color="#2D9BF0" />
        </BoxButton>
      </td>            
    </tr>
  )
}

export default RowsProducts
