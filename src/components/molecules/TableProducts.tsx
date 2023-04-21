import RowsProducts, { RowsProductsProps } from '../atoms/RowsProducts';

import { BoxTable } from './MoleculesStyle/Table';
import React from 'react'
import TableHeadCel from '../atoms/TableHeadCel';

export interface TableProductsProps {
    data: RowsProductsProps[];
    handleSelectProduct: (product: RowsProductsProps) => void;
  }

const TableProducts = ({data}: TableProductsProps) => {
  return (
    <BoxTable>
        <thead>                
            <TableHeadCel titulo="Nome" />
            <TableHeadCel titulo="Descrição" />
            <TableHeadCel titulo="Comissão" />
            <TableHeadCel titulo="Editar" />
        </thead>
         <tbody>
            {data.map((row: RowsProductsProps, index: any) =>
                <RowsProducts key={index}  name={row.name} description={row.description} commission={row.commission}/>
            )}
        </tbody>
    </BoxTable>
  )
}

export default TableProducts
