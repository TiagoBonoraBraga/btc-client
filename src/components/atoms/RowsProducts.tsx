import React from 'react'

export type RowsProductsProps = {
    nome: string;
    descricao: string;
    comissao: number; 
}
const RowsProducts = ({nome, descricao, comissao}: RowsProductsProps ) => {
  return (
    <tr>
        <td>{nome}</td>
        <td>{descricao}</td>
        <td>{comissao}</td>            
    </tr>
  )
}

export default RowsProducts
