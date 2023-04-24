import RowsProducts, { RowsProductsProps } from '../atoms/RowsProducts';

import { BoxTable } from './MoleculesStyle/Table';
import React from 'react'
import TableHeadCel from '../atoms/TableHeadCel';

type TableProductsProps = {
    data: any;
    
}
const TableProducts = ({data}: TableProductsProps) => {
  return (
    <BoxTable>
        <thead>                
            <TableHeadCel titulo="Nome" />
            <TableHeadCel titulo="Descrição" />
            <TableHeadCel titulo="Score" />
            {/* <TableHeadCel titulo="Price" /> */}
            <TableHeadCel titulo="Editar" />
        </thead>
         <tbody>
            {data.map((row: RowsProductsProps, index: any) =>
                <RowsProducts key={index}  name={row.name} descricao={row.descricao} score={row.score} />
            )}
        </tbody>
    </BoxTable>
  )
}

export default TableProducts
