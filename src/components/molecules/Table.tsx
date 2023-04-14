import Rows, { RowsProps } from '../atoms/Rows';

import { BoxTable } from './MoleculesStyle/Table';
import React from 'react'
import TableHeadCel from '../atoms/TableHeadCel';

type TableProps = {
    data: any;
}


const Table = ({ data }: TableProps) => {
    console.log(data)
    return (
        <BoxTable>
            <thead>
                
                <TableHeadCel titulo="Nome" />
                <TableHeadCel titulo="Nº Clientes" />
                <TableHeadCel titulo="Nº Usuários" />
                
            </thead>
            <tbody>
                {data.map((row: RowsProps, index: any) =>
                    <Rows key={index}  nome={row.nome} clientes={row.clientes} usuarios={row.usuarios}  />
                )}
            </tbody>
        </BoxTable>
    )
}

export default Table
