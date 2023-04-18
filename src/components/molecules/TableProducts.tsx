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
            <TableHeadCel titulo="Comissão" />
            <TableHeadCel titulo="Editar" />
        </thead>
         <tbody>
            {data.map((row: RowsProductsProps, index: any) =>
                <RowsProducts key={index}  nome={row.nome} descricao={row.descricao} comissao={row.comissao}/>
            )}
        </tbody>
    </BoxTable>
  )
}

export default TableProducts
