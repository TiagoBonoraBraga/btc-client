import React, { useEffect, useState } from 'react'

import { BoxTable } from '../StylePages/Franchised'
import Header from '../../components/organisms/Header'
import SubTitle from '../../components/atoms/SubTitle'
import TableProducts from '../../components/molecules/TableProducts'
import { api } from '../../utils/api/api'

// const franchised = [
//     { nome: "Produto 1",  descricao: "Produto HyperLocal", comissao: 20},
//     { nome: "Produto 2",  descricao: "Produto HyperLocal", comissao: 20},
//     { nome: "Produto 3",  descricao: "Produto HyperLocal", comissao: 20},
   
// ]


const Products = () => {

  // const [rows, setRows] = useState(franchised);
  const [products, setProducts] = useState([]);

   async function ProductsData() {
        const products = await api.getProducts();
        setProducts(products)
    }
    useEffect(() => {
        ProductsData()
    }, []);



  return (
    <>
    <Header/>
    <BoxTable>
      <SubTitle titulo="Produtos"/>
       <TableProducts data={undefined} products={''} />
    </BoxTable>    
    </>
  )
}

export default Products

