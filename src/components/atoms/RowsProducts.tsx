import { BoxButton } from './AtomsStyles/Rows';
import { FiEdit } from 'react-icons/fi';
import React from 'react'

export type RowsProductsProps = {
    name: string;
    descricao: string;
    score: string; 
    // price: string;
}
const RowsProducts = ({name, descricao, score}: RowsProductsProps ) => {
  function handleClick() {

  }
  return (
    <tr>
        <td>{name}</td>
        <td>{descricao}</td>
        <td>{score}</td>
        {/* <td>{price}</td> */}
        <td>
        <BoxButton onClick={handleClick}>
          <FiEdit color="#2D9BF0" />
        </BoxButton>
      </td>            
    </tr>
  )
}

export default RowsProducts
