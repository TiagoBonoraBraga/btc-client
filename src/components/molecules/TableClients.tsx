import RowsClient, { RowsClientProps } from '../atoms/RowsClient';

import { BoxTable } from './MoleculesStyle/Table';
import React from 'react'
import TableHeadCel from '../atoms/TableHeadCel';

type TableClientProps = {
  data: RowsClientProps[];
  handleSelectClient: (client: RowsClientProps) => void;
}

const TableClients = ({ data }: TableClientProps) => {
  return (
    <BoxTable>
      <thead>
        <TableHeadCel titulo="Nome" />
        <TableHeadCel titulo="Email" />
        <TableHeadCel titulo="Phone" />
        <TableHeadCel titulo="Cpf" />
        <TableHeadCel titulo="Editar" />
        <TableHeadCel titulo="Situação" />
      </thead>
      <tbody>
        {data.map((row: RowsClientProps, index: any) =>
          <RowsClient key={index} name={row.name} email={row.email} phone={row.phone} cpf={row.cpf} situacao={row.situacao} />
        )}
      </tbody>

    </BoxTable>
  )
}

export default TableClients
