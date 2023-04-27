import React, { useEffect, useState } from 'react'

import { BoxTable } from '../StylePages/Franchised'
import Header from '../../components/organisms/Header'
import { RowsClientProps } from '../../components/atoms/RowsClient'
import SubTitle from '../../components/atoms/SubTitle'
import TableClients from '../../components/molecules/TableClients'
import { api } from '../../utils/api/api'

// const clients = [
//     { nome: "João da silva", produto: "produto 1", franquia: "João da Silva", situacao: "ativo"},
//     { nome: "Danilo Senna",  produto: "produto 3", franquia: "Tammy Zugman", situacao: "desativado"},
//     { nome: "Carlos Pia",  produto: "produto 5", franquia:"Cleber Moura", situacao: "ativo"},
// ]
const Client = () => {

  const [rows, setRows] = useState<RowsClientProps[]>([]);
   const [selectedClient, setSelectedClient] = useState<RowsClientProps | undefined>(undefined);

    useEffect(() => {
    async function fetchData() {
      const clients = await api.getClients();
      setRows(clients);
    }
    fetchData();
  }, []);

  function handleSelectClient(clients: RowsClientProps) {
    setSelectedClient(clients);
  }
  
  return (
    <>
    <Header/>
    <BoxTable>
       <SubTitle titulo="Clientes"/>
       <TableClients data={rows} handleSelectClient={handleSelectClient}/>
    </BoxTable>    
    </>
  )
}

export default Client
