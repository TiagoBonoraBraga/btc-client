import React from 'react'

export type RowsClientProps = {
    nome: string;
    produto: string;
    franquia: string; 
    situacao: string; 
}

const RowsClient = ({nome, produto, franquia, situacao}: RowsClientProps) => {
  return (
    <tr>
        <td>{nome}</td>
        <td>{produto}</td>
        <td>{franquia}</td>
        <td>{situacao}</td>            
    </tr>
  )
}

export default RowsClient
