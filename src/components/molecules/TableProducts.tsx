import RowsProducts, { RowsProductsProps } from '../atoms/RowsProducts';

import { BoxTable } from './MoleculesStyle/Table';
import Celule from '../atoms/Celule';
import React from 'react'

type TableProductsProps = {
    data: any;
}
const TableProducts = ({data}: TableProductsProps) => {
  return (
    <BoxTable>
        <thead>                
            <Celule titulo="Nome" />
            <Celule titulo="Descrição" />
            <Celule titulo="Comissão" />
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
