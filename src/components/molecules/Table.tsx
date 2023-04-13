import Rows, { RowsProps } from '../atoms/Rows';

import { BoxTable } from './MoleculesStyle/Table';
import Celule from '../atoms/Celule';
import React from 'react'

type TableProps = {
    data: any;
}


const Table = ({ data }: TableProps) => {
    console.log(data)
    return (
        <BoxTable>
            <thead>
                
                <Celule titulo="Nome" />
                <Celule titulo="Nº Clientes" />
                <Celule titulo="Nº Usuários" />
                
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
