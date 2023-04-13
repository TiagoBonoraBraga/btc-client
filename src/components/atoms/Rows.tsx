import React from 'react'

export type RowsProps = {
    nome: string;
    clientes: string;
    usuarios: string;
    
   
}

const Rows = ({ nome, clientes, usuarios}: RowsProps) => {
   
  return (
  
        <tr>
            <td>{nome}</td>
            <td>{clientes}</td>
            <td>{usuarios}</td>
            
        </tr>
      
   
  )
}

export default Rows
