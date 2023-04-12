import Rows, { RowsProps } from '../../atoms/Rows';

import React from 'react'

type TableProps = {
    data: any;
}


const Table = ({ data }: TableProps) => {
    console.log(data)
    return (
        <table>
            <thead>
                <th>Id</th>
                <th>Nome</th>
                <th>Score</th>
                <th>Tier</th>
                <th>Comissão</th>
            </thead>
            <tbody>
                {data.map((row: RowsProps, index: any) => 
                    <Rows key={index} id={row.id} nome={row.nome} score={row.score} tier={row.tier} comissao={row.comissao} />
                )}
            </tbody>
        </table>
    )
}

export default Table
