import React, { useState, useEffect } from 'react'
import { BoxTable } from '../StylePages/Franchised'
import Header from '../../components/organisms/Header'
import SubTitle from '../../components/atoms/SubTitle'
import TableProducts from '../../components/molecules/TableProducts'
import { RowsProductsProps } from '../../components/atoms/RowsProducts';
import ModalProducts from '../../components/organisms/ModalProducts';
import { api } from '../../utils/api/api';

const Products = () => {

  const [rows, setRows] = useState<RowsProductsProps[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<RowsProductsProps | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      const products = await api.getProducts();
      setRows(products);
    }
    fetchData();
  }, []);

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


