import React, { useState } from 'react'

import { BoxTable } from './StylePages/Franchised'
import Header from '../components/organisms/Header'
import SubTitulo from '../components/atoms/SubTitulo'
import TableProducts from '../components/molecules/TableProducts'

const franchised = [
    { nome: "Produto 1",  descricao: "Produto HyperLocal", comissao: 20},
    { nome: "Produto 2",  descricao: "Produto HyperLocal", comissao: 20},
    { nome: "Produto 3",  descricao: "Produto HyperLocal", comissao: 20},
   
]
const Products = () => {

  const [rows, setRows] = useState(franchised);
  return (
    <>
    <Header/>
    <BoxTable>
      <SubTitulo titulo="Produtos"/>
       <TableProducts data={rows}/>

    </BoxTable>    
    </>
  )
}

export default Products

