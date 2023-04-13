import React, { useState } from 'react'

import { BoxTable } from './StylePages/Franchised';
import Header from '../components/organisms/Header'
import SubTitulo from '../components/atoms/SubTitulo';
import Table from '../components/molecules/Table';

const franchised = [
    { nome: "João da silva", clientes: 5, usuarios: 3},
    { nome: "Tammy Zugman",  clientes: 2, usuarios: 4},
    { nome: "Cleber Moura",  clientes: 15, usuarios:5},
]

// const Mocks = franchised
const Franchised = () => {

const [rows, setRows] = useState(franchised);

  return (
   <>   
      <Header/>
     <BoxTable>
      <SubTitulo titulo="Franqueados"/>
      <Table data={rows}/>
     </BoxTable>
   </>

      
  
  )
}

export default Franchised
