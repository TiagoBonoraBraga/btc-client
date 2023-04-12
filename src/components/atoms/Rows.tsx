import React from 'react'

export type RowsProps = {
    id: number;
    nome: string;
    score: number;
    tier: number;
    comissao: number;
   
}

const Rows = ({id, nome, score, tier, comissao}: RowsProps) => {
   
  return (
  
        <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td>{score}</td>
            <td>{tier}</td>
            <td>{comissao}</td>
        </tr>
      
   
  )
}

export default Rows
