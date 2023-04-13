import React, { useState } from 'react'

import { BoxTable } from './StylePages/Franchised'
import Header from '../components/organisms/Header'
import SubTitulo from '../components/atoms/SubTitulo'
import TableClients from '../components/molecules/TableClients'

const clients = [
    { nome: "João da silva", produto: "produto 1", franquia: "João da Silva", situacao: "ativo"},
    { nome: "Danilo Senna",  produto: "produto 3", franquia: "Tammy Zugman", situacao: "desativado"},
    { nome: "Carlos Pia",  produto: "produto 5", franquia:"Cleber Moura", situacao: "ativo"},
]
const Client = () => {

  const [rows, setRows] = useState(clients);
  
  return (
    <>
    <Header/>
    <BoxTable>
       <SubTitulo titulo="Clientes"/>
       <TableClients data={rows}/>
    </BoxTable>    
    </>
  )
}

export default Client
