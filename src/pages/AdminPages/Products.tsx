import React, { useState } from 'react'
import { BoxTable } from '../StylePages/Franchised'
import Header from '../../components/organisms/Header'
import SubTitle from '../../components/atoms/SubTitle'
import TableProducts from '../../components/molecules/TableProducts'
import products from "../../Mocks/products.json"
import { RowsProductsProps } from '../../components/atoms/RowsProducts';
import ModalProducts from '../../components/organisms/ModalProducts';

const Products = () => {

  const [rows, setRows] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState<RowsProductsProps | undefined>(undefined);

  function handleSelectProduct(product: RowsProductsProps) {
    setSelectedProduct(product);
  }

  return (
    <>
      <Header/>
      <BoxTable>
        <SubTitle titulo="Produtos"/>
        <TableProducts data={rows} handleSelectProduct={handleSelectProduct} />
        {selectedProduct && (
          <ModalProducts
            show={true}
            handleClose={() => setSelectedProduct(undefined)}
            productSelect={selectedProduct} onSave={function (product: RowsProductsProps): void {
              throw new Error('Function not implemented.')
            } }          />
        )}
      </BoxTable>    
    </>
  )
}

export default Products


