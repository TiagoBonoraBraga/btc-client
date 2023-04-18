import RowsClient, { RowsClientProps } from '../atoms/RowsClient';

import { BoxTable } from './MoleculesStyle/Table';
import React from 'react'
import TableHeadCel from '../atoms/TableHeadCel';

type TableClientProps = {
    data: any;
}

const TableClients = ({data}: TableClientProps ) => {
  return (
   <BoxTable>
     <thead>                
        <TableHeadCel titulo="Nome" />
        <TableHeadCel titulo="Produtos" />
        <TableHeadCel titulo="Franquia" />
        <TableHeadCel titulo="Editar" />
        <TableHeadCel titulo="Situação" />
     </thead>
     <tbody>
        {data.map((row: RowsClientProps, index: any) =>
        <RowsClient key={index}  nome={row.nome} produto={row.produto} franquia={row.franquia} situacao={row.situacao} />
        )}
      </tbody>

   </BoxTable>
  )
}

export default TableClients
