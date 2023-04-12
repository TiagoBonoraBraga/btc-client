import React, { useState } from 'react'

import Header from '../components/organisms/Header'
import Table from '../components/molecules/MoleculesStyle/Table';

const franchised = [
    {id: 1, nome: "João da silva", score: 46, tier: 6, comissao: 1000.00},
    {id: 2, nome: "Tammy Zugman", score: 29, tier: 0, comissao: 500.00},
    {id: 3, nome: "Cleber Moura", score: 96, tier: 4, comissao: 800.00},
]

const Franchised = () => {

const [rows, setRows] = useState(franchised);

  return (
    <div>
      <Header/>
      <Table data={rows}/>
      
    </div>
  )
}

export default Franchised
